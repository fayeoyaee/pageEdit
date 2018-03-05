import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // properties 
  userId: String;
  user = {};
  username: String;
  firstName: String;
  lastName: String;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );

    // user UserService to retrieve the user instance
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
  }

}
