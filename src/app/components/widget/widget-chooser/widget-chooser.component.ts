import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../services/widget.service.client';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  // properties 
  userId: String;
  websiteId: String;
  pageId: String;
  headerId: String;
  imageId: String;
  youtubeId: String;

  constructor(private widgetService: WidgetService, private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // retrieves userId as path parameter
    this.activateRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );

    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe(
        (data: any) => {
          var widgets = data;
          console.log(widgets)

        for (let x = 0; x < widgets.length; x++) {
            var widget = widgets[x];
            console.log(widget)
            console.log(widget['widgetType'])
            if (widget['widgetType'] == "IMAGE") {
              this.imageId = widget['_id'];
            }
            if (widget['widgetType'] == "HEADING") {
              this.headerId = widget['_id'];
            }
            if (widget['widgetType'] == "YOUTUBE") {
              this.youtubeId = widget['_id'];
            }
          }
          console.log(this.imageId)
          console.log(this.headerId)
          console.log(this.youtubeId)
        })
  }
}
