import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';

import { User } from '../../models/user.model';
import { Product } from '../../models/product.model';
import { Publication } from '../../models/publication.model';

const REGISTER_USER_URL = '/api/sign-up'
const GET_CURRENT_USER_URL = '/api/user';
const UPDATE_URL = '/api/user/update';
const GET_USER_PUBLICATIONS = '/api/user/publications'
const GET_USER_PAST_ORDERS = '/api/user/pastorders'

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
        return this._requester
            .getJsonAuthorized<User>(GET_CURRENT_USER_URL);
    }

    updateUser(user: User): Observable<Object> {
        let userAsString: string = this._requester.createBody(user);

        return this._requester
            .postAuthorized(UPDATE_URL, userAsString)
            .do((data: any) => this._localeStorageService.updateToken(data.body));
    }

    getUserPublications(): Observable<Publication[]> {
        return this._requester
            .getJsonAuthorized<Publication[]>(GET_USER_PUBLICATIONS);
    }

    getPastOrders(): Observable<Product[]> {
        return this._requester
            .getJsonAuthorized<Product[]>(GET_USER_PAST_ORDERS);
    }
}