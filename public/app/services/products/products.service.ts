import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../shared/requester.service';
import { Product } from '../../models/product.model';

@Injectable()
export class ProductsService {
    private recentProducts: string = '/api/recentproducts';

    constructor(private _requester: RequesterService) {

    }

    getRecentProducts(): Observable<Product[]> {
        return this._requester
            .getJson<Product[]>(this.recentProducts);
    }
}