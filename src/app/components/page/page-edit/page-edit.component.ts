import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  // properties 
  pageId: String;
  page = {};
  pagename: String;
  description: String;

  constructor(private pageService: PageService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.pageId = params['pageId'];
      }
    );

    // user UserService to retrieve the user instance
    this.page = this.pageService.findPageById(this.pageId);
    this.pagename = this.page['name'];
    this.description = this.page['description'];
  }

}
