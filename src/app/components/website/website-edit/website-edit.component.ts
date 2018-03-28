import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebsiteService } from '../../../services/website.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  @ViewChild('f') updateForm: NgForm;

  // properties 
  userId: String;
  websiteId: String;
  websites = [{}];
  website: {};
  namePh: String;
  descriptionPh: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private websiteService: WebsiteService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (data: any) => {
          this.website = data;
          this.namePh = this.website['name'];
          this.descriptionPh = this.website['description'];

        }
      )

    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.websites = data;
        }
      )
  }

  update() {
    console.log("hi from web edit")
    var name = this.updateForm.value.name;
    var description = this.updateForm.value.description;
    var newWebsite = { name: name, description: description }
    for (let key of Object.keys(newWebsite)) {
      if (newWebsite[key] == "") {
        this.errorFlag = true;
        this.errorMsg = "Web info incomplete"
        return
      }
    }

    this.websiteService.updateWebsite(this.websiteId, newWebsite)
      .subscribe(
        (data: any) => {
          console.log("web update succeed")
          this.router.navigate(["/user", this.userId, "website"])
        },
        (error: any) => {
          console.log("web update error")
        })
  }

  delete() {
    console.log("hi from web edit delete")

    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe(
        (data: any) => {
          console.log("web delete succeed")
        },
        (error: any) => {
          console.log("web delete error")
        })

    this.router.navigate(["/user", this.userId, "website"])
  }
}
