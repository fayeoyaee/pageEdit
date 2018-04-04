import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PageService } from '../../../services/page.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})

export class PageNewComponent implements OnInit {
  @ViewChild('f') newForm: NgForm;
  // properties 
  userId: String;
  websiteId: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private pageService: PageService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
      }
    );

  }

  create() {
    console.log("hi from page new create")
    var name = this.newForm.value.name;
    var description = this.newForm.value.description;
    var newPage = { name: name, description: description }
    for (let key of Object.keys(newPage)) {
      if (newPage[key] == "") {
        this.errorFlag = true;
        this.errorMsg = "Page info incomplete"
        return
      }
    }

    this.pageService.createPage(this.websiteId, newPage)
      .subscribe(
        (data: any) => {
          console.log("create new page succeed")
          this.router.navigate(["/user",this.userId, "website", this.websiteId, "page"])
        },
        (error: any) => {
          console.log("register page fail")
          this.errorFlag = true;
          this.errorMsg = error;
        });
  }
}