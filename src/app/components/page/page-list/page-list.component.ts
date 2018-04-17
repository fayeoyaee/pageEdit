import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({selector: 'app-page-list', templateUrl: './page-list.component.html', styleUrls: ['./page-list.component.css']})
export class PageListComponent implements OnInit {
  // properties
  userId : String;
  websiteId : String;
  pages = [{}];

  constructor(private pageService : PageService, private activateRoute : ActivatedRoute) {}

  ngOnInit() {

    this
      .activateRoute
      .params
      .subscribe((params : any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this
          .pageService
          .findPagesByWebsiteId(this.websiteId)
          .subscribe((data : any) => {
            this.pages = data;
            console.log("pages:")
            console.log(this.pages)
          })
      });
  }
}
