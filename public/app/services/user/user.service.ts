import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RequesterService } from '../shared/requester.service';
import { LocalStorageService } from '../shared/local-storage.service';

import { User } from '../../models/user.model';
import { Product } from '../../models/product.model';
import { Order } from '../../models/order.model';
import { Publication } from '../../models/publication.model';

const REGISTER_USER_URL = '/api/sign-up';
const GET_CURRENT_USER_URL = '/api/user';
const UPDATE_URL = '/api/user/update';
const GET_USER_PUBLICATIONS_URL = '/api/user/publications';
const GET_USER_PAST_ORDERS_URL = '/api/user/pastorders';
const GET_USER_BASKET_URL = '/api/user/basket';
const PROCEED_USER_ORDERS_URL = '/api/user/basket/proceed';
const REMOVE_USER_BASKET_URL = '/api/user/basket/remove';
const GET_USER_PROCEEDING_URL = '/api/user/basket/proceeding';
const PAY_PROCEEDING_ORDERS_URL = '/api/user/basket/payment';

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
            .getJsonAuthorized<Publication[]>(GET_USER_PUBLICATIONS_URL);
    }

    // TODO get Order[]
    getPastOrders(): Observable<Product[]> {
        return this._requester
            .getJsonAuthorized<Product[]>(GET_USER_PAST_ORDERS_URL);
    }

    getUserOrdersFromBasket(): Observable<Order[]> {
        return this._requester
            .getJsonAuthorized<Order[]>(GET_USER_BASKET_URL);
    }

    proceedUserOrders(orders: Order[]): Observable<Order[]> {
        let bodyObj = { orders: JSON.stringify(orders) };
        let body = this._requester.createBody(bodyObj);

        return this._requester
            .postAuthorized<Order[]>(PROCEED_USER_ORDERS_URL, body);
    }

    removeUserOrdersFromBasket(orders: Order[]): Observable<Order[]> {
        let bodyObj = { orders: JSON.stringify(orders) };
        let body = this._requester.createBody(bodyObj);

        return this._requester
            .postAuthorized<Order[]>(REMOVE_USER_BASKET_URL, body);
    }

    getUserProceedingOrders(): Observable<Order[]> {
        return this._requester
            .getJsonAuthorized<Order[]>(GET_USER_PROCEEDING_URL);
    }

    payUserProceedingOrders(orders: Order[], deliveryDetails: any): Observable<Order[]> {
        let bodyObj = {
            orders: JSON.stringify(orders),
            deliveryDetails: JSON.stringify(deliveryDetails)
        },
            body = this._requester.createBody(bodyObj);

        return this._requester
            .postAuthorized<Order[]>(PAY_PROCEEDING_ORDERS_URL, body);
    }
}
