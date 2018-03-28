import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageService } from '../../../services/page.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  @ViewChild('f') updateForm: NgForm;

  // properties 
  userId: String;
  websiteId: String;
  pageId: String;
  pagename: String;
  description: String;
  namePh: String;
  descriptionPh: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private pageService: PageService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );

    // user UserService to retrieve the user instance
    this.pageService.findPageById(this.pageId)
      .subscribe(
        (data: any) => {
          var page = data;
          this.namePh = page['name'];
          this.descriptionPh = page['description'];
        }
      )
  }

  update() {
    console.log("hi from web edit")
    var name = this.updateForm.value.name;
    var description = this.updateForm.value.description;
    var newPage = { name: name, description: description }
    for (let key of Object.keys(newPage)) {
      if (newPage[key] == "") {
        this.errorFlag = true;
        this.errorMsg = "page info incomplete"
        return
      }
    }

    this.pageService.updatePage(this.pageId, newPage)
      .subscribe(
        (data: any) => {
          console.log("page update succeed")
          this.router.navigate(["/user", this.userId, "website", this.websiteId, "page"])
        },
        (error: any) => {
          console.log("page update error")
        })
  }

  delete() {
    console.log("hi from page edit delete")

    this.pageService.deletePage(this.pageId)
      .subscribe(
        (data: any) => {
          console.log("page delete succeed")
          this.router.navigate(["/user", this.userId, "website", this.websiteId, "page"])
        },
        (error: any) => {
          console.log("page delete error")
        })

  }
}
