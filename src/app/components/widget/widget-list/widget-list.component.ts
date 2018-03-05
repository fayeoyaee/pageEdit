import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../services/widget.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  // properties 
  userId: String;
  websiteId: String;
  pageId: String;
  widgets = [{}];

  constructor(private widgetService: WidgetService, private activateRoute: ActivatedRoute) { }

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
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

}
