import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'; // unlock map operator
import {environment} from '../../environments/environment';

@Injectable()

export class WidgetService {
    constructor(private _http: Http) { }

    // TODO: find env baseUrl
    baseUrl = environment.baseUrl;

    api = {
        'createWidget': this.createWidget,
        'updateWidget': this.updateWidget,
        'deleteWidget': this.deleteWidget,
        'findWidgetById': this.findWidgetById,
        'findWidgetsByPageId': this.findWidgetsByPageId,
    };

    createWidget(pageId, widget) {
        return this._http.post('api/page/' + pageId + "/widget", widget)
   }

    updateWidget(widgetId, widget) {
        return this._http.put('api/widget/' + widgetId, widget)
   }

    deleteWidget(widgetId) {
        return this._http.delete('api/widget/' + widgetId)
   }

    findWidgetById(widgetId) {
        return this._http.get('api/widget/' + widgetId)
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )
 
   }

    findWidgetsByPageId(pageId) {
        return this._http.get('api/page/' + pageId + "/widget")
            .map(
                (res: Response) => {
                    const data = res.json();
                    return data;
                }
            )
   }
}
