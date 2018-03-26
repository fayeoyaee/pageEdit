import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'; // unlock map operator
import {environment} from '../../environments/environment';

@Injectable()

export class WebsiteService {

    constructor(private _http: Http) { }

    // TODO: find env baseUrl
    baseUrl = environment.baseUrl;


    websites = [
        { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
        { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
        { _id: "456", name: "Gizmodo", developerId: "123", description: "Lorem" },
        { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
        { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
        { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
        { _id: "789", name: "Chess", developerId: "234", description: "Lorem" },
    ];

    api = {
        'createWebsite': this.createWebsite,
        'updateWebsite': this.updateWebsite,
        'deleteWebsite': this.deleteWebsite,
        'findWebsiteById': this.findWebsiteById,
        'findWebsitesByUser': this.findWebsitesByUser,
    };

    // TODO: catch error
    createWebsite(userId, website) {
        return this._http.post('api/user/' + userId + "/website", website)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )

    }

    updateWebsite(websiteId, website) {
        return this._http.put('api/website/' + websiteId, website)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )

    }

    deleteWebsite(websiteId) {
        return this._http.delete('api/website/' + websiteId)
    }

    findWebsiteById(websiteId: String) {
        return this._http.get('api/website/' + websiteId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )

    }

    findWebsitesByUser(userId) {
        return this._http.get('/api/user/' + userId + "/website")
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )

    }
}
