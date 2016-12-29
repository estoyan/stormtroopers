import { Injectable, Output } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from './local-storage.service';

import { User } from '../../models/user.model';
import { Publication } from '../../models/publication.model';

const REGISTER_USER_URL = '/api/sign-up'
const GET_CURRENT_USER_URL = '/api/user';
const UPDATE_URL = '/api/update';
const GET_USER_PUBLICATIONS = '/api/user/publications'

@Injectable()
export class UserService {
    constructor(
        private _requester: RequesterService,
        private _localeStorageService: LocalStorageService
        ) {
    }

    register(userInfo: any): Observable<Object> {
        let userInfoAsString = this._requester.createBody(userInfo);

        return this._requester
            .postEncoded(REGISTER_USER_URL, userInfoAsString);
    }

    getCurrentUser(): Observable<User> {
        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        return this._requester
            .getJson<User>(GET_CURRENT_USER_URL, headers);
    }

    updateUser(user: User): Observable<Object> {
        let userAsString: string = this._requester.createBody(user);

        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        return this._requester
            .postEncoded(UPDATE_URL, userAsString, headers)
            .do((data: any) => window.localStorage.setItem('user', JSON.stringify(data.body)));
    }

    getUserPublications(): Observable<Publication[]> {
        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        return this._requester
            .getJson<Publication[]>(GET_USER_PUBLICATIONS, headers);
    }
}