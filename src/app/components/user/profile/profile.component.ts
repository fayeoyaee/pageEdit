import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.css']})
export class ProfileComponent implements OnInit {
  @ViewChild('f')registerForm : NgForm;

  // properties
  user : {};
  userId : String;
  username : String;
  usernamePh : String;
  firstName : String;
  firstNamePh : String;
  lastName : String;
  lastNamePh : String;
  email : String;
  emailPh : String;
  errorFlag : boolean;
  errorMsg : String;

  constructor(private userService : UserService, private activateRoute : ActivatedRoute, private router : Router, private sharedService : SharedService) {}

  ngOnInit() {

    // retrieves userId as path parameter
    this
      .activateRoute
      .params
      .subscribe((params : any) => {
        this.userId = params['userId'];
        console.log("profile ts 38: userid=", this.userId);
      });

    this
      .userService
      .findUserById(this.userId)
      .subscribe((data : any) => {
        this.user = data;
        this.usernamePh = this.user['username'];
        this.firstNamePh = this.user['firstName'];
        this.lastNamePh = this.user['lastName'];
        this.emailPh = this.user['email'];
        console.log("profile ts 48: user=",this.user);
      });
  }

  update() {
    this.username = this.registerForm.value.username;
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.email = this.registerForm.value.email;
    this.user = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }
    for (let key of Object.keys(this.user)) {
      if (this.user[key] == "") {
        this.errorFlag = true;
        this.errorMsg = "User info incomplete"
        return
      }
    }

    this
      .userService
      .updateUser(this.userId, this.user)
      .subscribe((data : any) => {
        console.log("user update succeed")
      }, (error : any) => {
        console.log("user update error")
      })
  }

  logout() {
    this
      .userService
      .logout()
      .subscribe((data : any) => this.router.navigate(['/login']));
  }
}
