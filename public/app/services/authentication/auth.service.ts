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

    login(userCreds: any) {
        let url = '/api/sing-in';
        let headers = new Headers();
        let creds = `username=${userCreds.username}&password=${userCreds.password}`;

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

    register(userInfo: any) {
        let url = '/api/sign-up';
        let headers = new Headers();
        let userInfoAsString = `username=${userInfo.username}&firstname=${userInfo.firstname}&lastname=${userInfo.lastname}&email=${userInfo.email}&password=${userInfo.password}`

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(url, userInfoAsString, headers)
            .do(data => console.log(data));
    }
}
