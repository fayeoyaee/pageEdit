import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // access the form using @ViewChild which allows to access a local reference
  // the instance of @ViewChild will be of type NgForm
  @ViewChild('f') registerForm: NgForm;

  // properties 
  firstName: String;
  lastName: String;
  email: String;
  username: String;
  password: String;
  password2: String;
  userId: String;
  user;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorMsg = 'Invalid username or password!';
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.password2 = this.registerForm.value.password2;
    if (this.password != this.password2) {
      this.errorFlag = true;
      this.errorMsg = "Please verify password"
      return
    }
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.email = this.registerForm.value.email;
    this.user = { username: this.username, password: this.password, firstName: this.firstName, lastName: this.lastName, email: this.email }
    for (let key of Object.keys(this.user)) {
      if (this.user[key] == "") {
        this.errorFlag = true;
        this.errorMsg = "User info incomplete"
        return
      }
    }

    this.userService.createUser(this.user)
      .subscribe(
        (data: any) => {
          console.log("register user succeed")
          this.userId = data._id;
          this.router.navigate(["/user/" + this.userId])
        },
        (error: any) => {
          console.log("register user fail")
          this.errorFlag = true;
          this.errorMsg = error;
        });
  }
}
