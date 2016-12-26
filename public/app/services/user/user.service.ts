import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { RequesterService } from '../shared/requester.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
    constructor(private _http: Http, private _requester: RequesterService) {

    }

    register(userInfo: any) {
        let url = '/api/sign-up';
        let headers = new Headers();
        let userInfoAsString = `username=${userInfo.username}&firstname=${userInfo.firstname}&lastname=${userInfo.lastname}&email=${userInfo.email}&password=${userInfo.password}`

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(url, userInfoAsString, headers);
    }

    getUserFromLocalStorage() {
        return JSON.parse(window.localStorage.getItem('user'));
    }
}