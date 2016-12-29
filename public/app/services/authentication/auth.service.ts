import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';

const LOGIN_URL = '/api/sing-in';

@Injectable()
export class AuthService {
    constructor(
        private _requester: RequesterService,
        private _localeStarageService: LocalStorageService
        ) {
    }

    login(userCreds: any): Observable<Object> {
        let body = `username=${userCreds.username}&password=${userCreds.password}`;

        return this._requester
            .postEncoded(LOGIN_URL, body)
            .do((data: any) => {
                window.localStorage.setItem('user', JSON.stringify(data.body));
            });
    }

    logout(): void {
        this._localeStarageService.deleteUser();
    }

    isLoggedIn(): boolean {
        let isUserLoggedIn = this._localeStarageService.getUser();
        if (isUserLoggedIn) {
            return true;
        }

        return false;
    }
}
