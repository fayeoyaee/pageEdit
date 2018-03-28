import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WidgetService } from '../../../../services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {
  @ViewChild('f') updateForm: NgForm;
  // properties 
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgettype: String;
  widgettext: String;
  widgeturl: String;
  widgetwidth: String;
  typePh: String;
  widthPh: String;
  urlPh: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private widgetService: WidgetService, private router: Router, private activateRoute: ActivatedRoute) { }

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

    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => {
          var widget = data;
          this.typePh = widget['widgetType'];
          this.widthPh = widget['width'];
          this.urlPh = widget['url'];
        });
  }

  update() {
    console.log("hi from web edit")
    var type = this.updateForm.value.widgettype;
    var url = this.updateForm.value.widgeturl;
    var width = this.updateForm.value.widgetwidth;
    var newWidget = { widgetType: type, url: url, width: width }
    for (let key of Object.keys(newWidget)) {
      if (newWidget[key] == "") {
        this.errorFlag = true;
        this.errorMsg = "widget info incomplete"
        return
      }
    }

    this.widgetService.updateWidget(this.widgetId, newWidget)
      .subscribe(
        (data: any) => {
          console.log("widget update succeed")
          this.router.navigate(["/user", this.userId, "website", this.websiteId, "page", this.pageId, "widget"])
        },
        (error: any) => {
          console.log("widget update error")
        })
  }

  delete() {
    console.log("hi from widget edit delete")

    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) => {
          console.log("widget delete succeed")
          this.router.navigate(["/user", this.userId, "website", this.websiteId, "page", this.pageId, "widget"])
        },
        (error: any) => {
          console.log("widget delete error")
        })

  }
}


