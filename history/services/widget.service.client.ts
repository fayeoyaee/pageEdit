import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()

export class WidgetService {
    constructor() { }

    widgets = [
        { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
        { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
        { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "http://lorempixel.com/400/200/" },
        { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
        { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
        { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://www.youtube.com/embed/XPrxhmuzUyo" },
        { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
    ];

    api = {
        'createWidget': this.createWidget,
        'updateWidget': this.updateWidget,
        'deleteWidget': this.deleteWidget,
        'findWidgetById': this.findWidgetById,
        'findWidgetsByPageId': this.findWidgetsByPageId,
    };

    createWidget(pageId, widget) {
        widget.pageId = pageId;
        this.widgets.push(widget);
    }

    updateWidget(widgetId, website) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                this.widgets[x] = website;
                return this.widgets[x];
            }
        }
    }

    deleteWidget(widgetId) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                this.widgets.splice(x, 1);
                return;
            }
        }
    }

    findWidgetById(widgetId) {
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x]._id == widgetId) {
                return this.widgets[x];
            }
        }
    }

    findWidgetsByPageId(pageId) {
        var pageWidgets = [{}];
        for (let x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId == pageId) {
                pageWidgets.push(this.widgets[x]);
            }
        }
        pageWidgets.splice(0, 1);
        return pageWidgets;
    }
}
