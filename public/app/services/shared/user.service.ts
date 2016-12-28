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
        let headers = new Headers();
        let userInfoAsString = `username=${userInfo.username}&firstname=${userInfo.firstname}&lastname=${userInfo.lastname}&email=${userInfo.email}&password=${userInfo.password}`

        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this._requester
            .post(REGISTER_USER_URL, userInfoAsString, headers);
    }

    getCurrentUser(): Observable<User> {
        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        return this._requester
            .getJson<User>(GET_CURRENT_USER_URL, headers);
    }

    updateUser(user: User): Observable<Object> {
        let userAsString: string = '';
        let keys = Object.keys(user);
        Object.keys(user).forEach(key => userAsString += `${key}=${user[key]}&`);

        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return this._requester
            .post(UPDATE_URL, userAsString, headers)
            .do((data: any) => window.localStorage.setItem('user', JSON.stringify(data.body)));
    }

    getUserPublications(): Observable<Publication[]> {
        let headers = new Headers();
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        return this._requester
            .getJson<Publication[]>(GET_USER_PUBLICATIONS, headers);
    }
}