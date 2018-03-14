import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  // properties 
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgettype: String;
  widgettext: String;
  widgeturl: String;
  widgetwidth: String;

  constructor(private widgetService: WidgetService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
        this.widgetId = params['widgetId'];
      }
    );

    // user UserService to retrieve the user instance
    var widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgettype = widget['widgetType'];
    this.widgettext = widget['text'];
    this.widgeturl = widget['url'];
    this.widgetwidth = widget['width'];
  }

}
