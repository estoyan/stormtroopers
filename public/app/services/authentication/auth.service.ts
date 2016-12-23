import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RequesterService } from '../shared/requester.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    isLoggedin: boolean = false;

    constructor(private _http: Http, private _requester: RequesterService) {

    }

    login(usercreds: any) {
        this.isLoggedin = false;
        let url = 'http://localhost:3000/authenticate';
        let headers = new Headers();
        let creds = 'username=' + usercreds.username + '&password=' + usercreds.password;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(url, creds, headers)
            .do((data: any) => {
                window.localStorage.setItem('auth_key', data.token);
                this.isLoggedin = true;
            });
    }

    logout() {
        this.isLoggedin = false;
        window.localStorage.removeItem('auth_key');
    }
}
