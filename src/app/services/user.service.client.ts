import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'; // unlock map operator
import {environment} from '../../environments/environment';

@Injectable()

export class UserService {
    constructor(private _http: Http) { }

    // TODO: find env baseUrl
    baseUrl = environment.baseUrl;

    api = {
        'createUser': this.createUser,
        'updateUser': this.updateUser,
        'deleteUser': this.deleteUser,
        'findUserById': this.findUserById,
        'findUserByUsername': this.findUserByUsername,
        'findUserByCredentials': this.findUserByCredentials,
    };

    createUser(user: any) {
        return this._http.post('api/user', user)
        .map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        )
   }

    updateUser(userId, user) {
        return this._http.put('api/user/' + userId, user)
        .map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        )
   }

    deleteUser(userId) {
        return this._http.delete('api/user/' + userId, userId)
    }

    findUserById(userId: String) {
        // map the received response in a standard format
        return this._http.get(this.baseUrl + 'api/user/' + userId)
        .map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        )
    }

    findUserByUsername(userName: String) {
        return this._http.get('api/user?username=' + userName)
        .map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        )

    }

    findUserByCredentials(userName, password) {
        return this._http.get('api/user?username=' + userName + '&password=' + password)
        .map(
            (res: Response) => {
                const data = res.json();
                return data;
            }
        )
    }
}
