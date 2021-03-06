import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

import {WidgetService} from '../../../services/widget.service.client';

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

  constructor(
      private widgetService: WidgetService,
      private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // retrieves userId as path parameter
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.websiteId = params['websiteId'];
      this.pageId = params['pageId'];
    });

    // user UserService to retrieve the user instance
    this.widgetService.findWidgetsByPageId(this.pageId)
        .subscribe((data: any) => {
          this.widgets = data;
          for (let i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]['url']) {
              this.widgets[i]['url'] =
                  this.sanitizer.bypassSecurityTrustResourceUrl(
                      this.widgets[i]['url']);
            }
          }
        })
  };

  reorder(pageId, widgetId) {
    this.widgetService.reorder(pageId, widgetId).subscribe((data: any) => {
      // console.log('reorder result from widget list');
      // console.log(data);
      this.widgets = data;
      for (let i = 0; i < this.widgets.length; i++) {
        if (this.widgets[i]['url']) {
          this.widgets[i]['url'] =
              this.sanitizer.bypassSecurityTrustResourceUrl(
                  this.widgets[i]['url']);
        }
      }
    });
  }
}
