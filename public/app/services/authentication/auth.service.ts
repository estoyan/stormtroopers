import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RequesterService } from '../shared/requester.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
    constructor(private _http: Http, private _requester: RequesterService) {

    }

    login(userCreds: any) {
        let url = '/api/sing-in';
        let headers = new Headers();
        let creds = `username=${userCreds.username}&password=${userCreds.password}`;

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(url, creds, headers)
            .do((data: any) => {
                window.localStorage.setItem('user', JSON.stringify(data.body));
            });
    }

    logout() {
        window.localStorage.removeItem('user');
    }

    isLoggedIn(): boolean {
        let isUserLoggedIn = window.localStorage.getItem('user');
        if (isUserLoggedIn) {
            return true;
        }

        return false;
    }
}
