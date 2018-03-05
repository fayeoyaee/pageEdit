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
  widgetId: String;
  widget = {};
  widgettype: String;
  widgettext: String;
  widgeturl: String;
  widgetwidth: String;

  constructor(private widgetService: WidgetService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {

    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.widgetId = params['widgetId'];
      }
    );

    // user UserService to retrieve the user instance
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgettype = this.widget['widgetType'];
    this.widgettext = this.widget['text'];
    this.widgeturl = this.widget['url'];
    this.widgetwidth = this.widget['width'];
  }

}
