import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';
import { NavbarService } from '../shared/navbar.service';

import { User } from '../../models/user.model';

const LOGIN_URL = '/api/sing-in';

@Injectable()
export class AuthService {
    constructor(
        private _requester: RequesterService,
        private _localeStarageService: LocalStorageService,
        private _navbarService: NavbarService
    ) {
    }

    login(userCreds: any): Observable<Object> {
        let body = `username=${userCreds.username}&password=${userCreds.password}`;

        return this._requester
            .postEncoded(LOGIN_URL, body)
            .do((data: any) => {
                this._navbarService.updateUserInfo(data.body)
                this._localeStarageService.updateToken(data.body);
            });
    }

    logout(): void {
        this._navbarService.updateUserInfo(<User>{ side: 'neutral' });
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
