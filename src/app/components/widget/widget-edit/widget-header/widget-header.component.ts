import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  @ViewChild('f') updateForm: NgForm;
  // properties
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widgettype: String;
  widgettext: String;
  widgetsize: Number;
  sizePh: Number;
  textPh: String;
  typePh: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(
      private widgetService: WidgetService, private router: Router,
      private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
      this.websiteId = params['websiteId'];
      this.pageId = params['pageId'];
      this.widgetId = params['widgetId'];
    });

    this.widgetService.findWidgetById(this.widgetId).subscribe((data: any) => {
      var widget = data;
      this.typePh = widget['type'];
      this.textPh = widget['text'];
      this.sizePh = widget['size'];
    })
  }
  update() {
    var type = this.updateForm.value.widgettype;
    var text = this.updateForm.value.widgettext;
    var size = this.updateForm.value.widgetsize;
    var newWidget = {type: type, text: text, size: size};
    for (let key of Object.keys(newWidget)) {
      if (newWidget[key] == '') {
        this.errorFlag = true;
        this.errorMsg = 'widget info incomplete'
        return
      }
    }

    this.widgetService.updateWidget(this.widgetId, newWidget)
        .subscribe((data: any) => {
          // console.log({'widget header updatewidget received data': data});
          this.router.navigate([
            '/user', this.userId, 'website', this.websiteId, 'page',
            this.pageId, 'widget'
          ])
        }, (error: any) => {console.log('widget update error')})
  }

  delete() {
    this.widgetService.deleteWidget(this.widgetId).subscribe((data: any) => {
      // console.log({'widget header update widget received data': data});
      this.router.navigate([
        '/user', this.userId, 'website', this.websiteId, 'page', this.pageId,
        'widget'
      ])
    }, (error: any) => {console.log('widget delete error')})
  }
}
