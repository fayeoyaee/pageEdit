import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  // properties 
  userId: String;
  websiteId: String;
  websites = [{}];
  websitename: String;
  description: String;

  constructor(private websiteService: WebsiteService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

    // user UserService to retrieve the user instance
    var website = this.websiteService.findWebsiteById(this.websiteId);
    this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.websitename = website['name'];
    this.description = website['description'];
  }

}
