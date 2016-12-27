import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { RequesterService } from '../shared/requester.service';

const LOGIN_URL = '/api/sing-in';

@Injectable()
export class AuthService {
    constructor(private _requester: RequesterService) {
    }

    login(userCreds: any): Observable<Object> {
        let headers = new Headers();
        let creds = `username=${userCreds.username}&password=${userCreds.password}`;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return this._requester
            .post(LOGIN_URL, creds, headers)
            .do((data: any) => {
                window.localStorage.setItem('user', JSON.stringify(data.body));
            });
    }

    logout(): void {
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
