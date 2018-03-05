import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()

export class PageService {
    constructor() { }

    pages = [
        { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
        { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
        { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" },
    ];

    api = {
        'createPage': this.createPage,
        'updatePage': this.updatePage,
        'deletePage': this.deletePage,
        'findPageById': this.findPageById,
        'findPagesByWebsiteId': this.findPagesByWebsiteId,
    };

    createPage(websiteId, page) {
        page.websiteId = websiteId;
        this.pages.push(page);
    }

    updatePage(pageId, page) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == pageId) {
                this.pages[x] = page;
                return this.pages[x];
            }
        }
    }

    deletePage(pageId) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == pageId) {
                this.pages.splice(x, 1);
                return;
            }
        }
    }

    findPageById(pageId) {
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x]._id == pageId) {
                return this.pages[x];
            }
        }
    }

    findPagesByWebsiteId(websiteId) {
        var websitePages = [{}];
        for (let x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId == websiteId) {
                websitePages.push(this.pages[x]);
            }
        }
        websitePages.splice(0, 1);
        return websitePages;
    }
}
