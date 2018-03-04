import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable()

export class WebsiteService {
    constructor() { }

    websites = [
        { _id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
        { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
        { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
        { _id: "890", name: "Go", developerId: "123", description: "Lorem"},
        { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
        { _id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
        { _id: "789", name: "Chess", developerId: "234", description: "Lorem"},
    ];

    api = {
        'createWebsite': this.createWebsite,
        'updateWebsite': this.updateWebsite,
        'deleteWebsite': this.deleteWebsite,
        'findWebsiteById': this.findWebsiteById,
        'findWebsitesByUser': this.findWebsitesByUser,
    };

    createWebsite(websiteId, website) {
        website.developerId = websiteId;
        this.websites.push(website);
    }

    updateWebsite(websiteId, website) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == websiteId) {
                this.websites[x] = website;
                return this.websites[x];
            }
        }
    }

    deleteWebsite(websiteId) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == websiteId) {
                this.websites.splice(x, 1);
                return;
            }
        }
    }

    findWebsiteById(websiteId: String) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x]._id == websiteId) {
                return this.websites[x];
            }
        }
    }

    findWebsitesByUser(userId) {
        for (let x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId == userId) {
                return this.websites[x];
            }
        }
    }
}
