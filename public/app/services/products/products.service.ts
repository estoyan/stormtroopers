import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../shared/requester.service';
import { Product } from '../../models/product.model';

const RECENT_PRODUCTS_URL: string = '/api/recentproducts';
const PRODUCTS_URL: string = '/api/allProducts';
const PRODUCTS_FROM_BASKET_URL: string = '/api/products/basket';

@Injectable()
export class ProductsService {
    constructor(private _requester: RequesterService) {

    }

    getRecentProducts(): Observable<Product[]> {
        return this._requester
            .getJson<Product[]>(RECENT_PRODUCTS_URL);
    }
    getAllProducts(): Observable<Product[]> {
        return this._requester
            .getJson<Product[]>(PRODUCTS_URL)
    }
    getProductById(id: string): Observable<Product> {
        let productUrl = PRODUCTS_URL + `/${id}`;
        return this._requester
            .getJson<Product>(productUrl);
    }
    getProductsFromBasket() {
        return this._requester
            .getJsonAuthorized<Product[]>(PRODUCTS_FROM_BASKET_URL);
    }
}