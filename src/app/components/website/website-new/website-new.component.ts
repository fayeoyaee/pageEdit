import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebsiteService } from '../../../services/website.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  @ViewChild('f') newWebsiteForm: NgForm;
  // properties 
  userId: String;
  websites = [{}];
  errorFlag: boolean;
  errorMsg: String;

  constructor(private websiteService: WebsiteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );

    // use websiteService to retrieve the user instance
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.websites = data;
        }
      )
  }

  create() {
    console.log("hi from web new create")
    var name = this.newWebsiteForm.value.name;
    var description = this.newWebsiteForm.value.description;
    var newWebsite = { name: name, description: description }
    for (let key of Object.keys(newWebsite)) {
      if (newWebsite[key] == "") {
        this.errorFlag = true;
        this.errorMsg = "Website info incomplete"
        return
      }
    }

    this.websiteService.createWebsite(this.userId, newWebsite)
      .subscribe(
        (data: any) => {
          console.log("create new website succeed")
          this.router.navigate(["/user",this.userId, "website"])
        },
        (error: any) => {
          console.log("register website fail")
          this.errorFlag = true;
          this.errorMsg = error;
        });
  }
}