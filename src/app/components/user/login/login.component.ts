import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // access the form using @ViewChild which allows to access a local reference
  // the instance of @ViewChild will be of type NgForm
  @ViewChild('f') loginForm: NgForm;

  // properties 
  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg: 'Invalid username or password!';

  constructor() { }

  ngOnInit() {
  }

  login() {
    // fetching data from loginForm using @ViewChild reference created in above steps
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
  }

}
