import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})

export class LoginComponent implements OnInit {
  // access the form using @ViewChild which allows to access a local reference the
  // instance of @ViewChild will be of type NgForm
  @ViewChild('f')loginForm : NgForm;

  // properties
  username : String;
  userId : String;
  password : String;
  errorFlag : boolean;
  errorMsg : String;

  constructor(private userService : UserService, private router : Router, private sharedService : SharedService) {}

  ngOnInit() {
    // TODO: currently it always route to user/123, no matter what username and
    // password should change it in login() should not allow router if error
    this.userId = "123";
    this.errorMsg = 'Invalid username or password!';
  }

  login() {
    // fetching data from loginForm using @ViewChild reference created in above
    // steps
    // console.log("hi from login")
    // console.log("userId is ")
    // console.log(this.userId)
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    // calling client side userservice to send login information
    // console.log('data', this.username);
    this
      .userService
      .login(this.username, this.password)
      .subscribe((data : any) => {
        // console.log("login ts 45: received data:")
        // console.log(data);
        this.sharedService.user = data;
        this
          .router
          .navigate(['/user/',data._id])
      }, (error : any) => {
        console.log(error);
      })

    // this.userService.findUserByCredentials(this.username, this.password)
    // .subscribe(     (data: any) => {       console.log("data is ")
    // console.log(data)       this.userId = data._id;       console.log("userId is
    // ")       console.log(this.userId)
    // this.router.navigate(["/user/"+this.userId])     },     (error: any) => {
    // console.log("error")       this.errorFlag = true;       this.errorMsg =
    // error;     });
  }
}
