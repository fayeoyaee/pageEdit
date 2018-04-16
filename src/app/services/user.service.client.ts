import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx'; // unlock map operator
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';

@Injectable()

export class UserService {
    constructor(private _http : Http, private router : Router, private sharedService : SharedService) {}

    // TODO: find env baseUrl
    baseUrl = environment.baseUrl;
    options = new RequestOptions();

    api = {
        'createUser': this.createUser,
        'updateUser': this.updateUser,
        'deleteUser': this.deleteUser,
        'findUserById': this.findUserById,
        'findUserByUsername': this.findUserByUsername,
        'findUserByCredentials': this.findUserByCredentials,
        'login': this.login,
        'logout': this.logout,
        'register': this.register
    };

    login(username : String, password : String) {
        this.options.withCredentials = true;
        const body = {
            username: username,
            password: password
        };
        return this
            ._http
            .post(this.baseUrl + '/api/login', body, this.options)
            .map((res : Response) => {
                const data = res.json();
                return data;
            });
    }

    logout() {
        this.options.withCredentials = true;
        return this
            ._http
            .post(this.baseUrl + '/api/logout', '', this.options)
            .map((res : Response) => {
                const data = res;
            });
    }

    register(user : any) {
        // console.log("user service client 55: register password="+user.password);
        this.options.withCredentials = true;
        return this
            ._http
            .post(this.baseUrl + '/api/register', user, this.options)
            .map((res : Response) => {
                const data = res.json();
                return data;
            });
    }

    loggedin() {
        this.options.withCredentials = true;
        return this
            ._http
            .post(this.baseUrl + '/api/loggedin', this.options)
            .map((res : Response) => {
                const user = res.json();
                if (user !== 0) {
                    this.sharedService.user = user;
                    return true;
                } else {
                    this
                        .router
                        .navigate(['/login']);
                    return false;
                }
            });
    }

    createUser(user : any) {
        return this
            ._http
            .post('/api/user', user)
            .map((res : Response) => {
                const data = res.json();
                return data;
            })
    }

    updateUser(userId, user) {
        return this
            ._http
            .put('/api/user/' + userId, user)
            .map((res : Response) => {
                const data = res.json();
                return data;
            })
    }

    deleteUser(userId) {
        return this
            ._http
            .delete('/api/user/' + userId, userId)
    }

    findUserById(userId : String) {
        // console.log("user service client 115: userId=", userId);
        // map the received response in a standard format
        return this
            ._http
            .get(this.baseUrl + '/api/user/' + userId)
            .map((res : Response) => {
                // console.log("user service client 117: res=", res);
                const data = res.json();
                return data;
            })
    }

    findUserByUsername(userName : String) {
        return this
            ._http
            .get('/api/user?username=' + userName)
            .map((res : Response) => {
                const data = res.json();
                return data;
            })

    }

    findUserByCredentials(userName, password) {
        return this
            ._http
            .get('/api/user?username=' + userName + '&password=' + password)
            .map((res : Response) => {
                const data = res.json();
                return data;
            })
    }
}
