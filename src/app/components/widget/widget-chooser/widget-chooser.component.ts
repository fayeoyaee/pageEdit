import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

import {WidgetService} from '../../../services/widget.service.client';

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
  youtubeId: String;
  types = ['HEADING', 'IMAGE', 'YOUTUBE'];
  type_urls = ['heading', 'image', 'youtube'];

  constructor(
      private widgetService: WidgetService,
      private activateRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // retrieves userId as path parameter
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.websiteId = params['websiteId'];
      this.pageId = params['pageId'];
    })
  };

  newWidget(idx) {
    var newWidget = {type: this.types[idx]};
    this.widgetService.createWidget(this.pageId, newWidget)
        .subscribe(
            (data: any) => {
              this.router.navigate([
                '/user', this.userId, 'website', this.websiteId, 'page',
                this.pageId, 'widget', data._id, this.type_urls[idx]
              ]);
            },
            (error: any) => {
              console.log('widget create error');
            })
  };
}
