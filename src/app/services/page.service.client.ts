import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'; // unlock map operator
import {environment} from '../../environments/environment';

@Injectable()

export class PageService {
    constructor(private _http: Http) { }

    // TODO: find env baseUrl
    baseUrl = environment.baseUrl;

    api = {
        'createPage': this.createPage,
        'updatePage': this.updatePage,
        'deletePage': this.deletePage,
        'findPageById': this.findPageById,
        'findPagesByWebsiteId': this.findPagesByWebsiteId,
    };

    createPage(websiteId, page) {
        return this._http.post('api/website/' + websiteId + "/page", page)
   }

    updatePage(pageId, page) {
        return this._http.put('api/page/' + pageId, page)
   }

    deletePage(pageId) {
        return this._http.delete('api/page/' + pageId)
   }

    findPageById(pageId) {
        return this._http.get('api/page/' + pageId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )
   }

    findPagesByWebsiteId(websiteId) {
        return this._http.get('api/website/' + websiteId + "/page")
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )
   }
}
