import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {
    private recentProducts: string = '/api/recentproducts';

    constructor(private _http: Http) {

    }
    getRecentProducts(): Observable<any> { //TODO: make interface for product
        return this._http
            .get(this.recentProducts)
            .map((response: Response) => <any>response.json())
            // .do(data => console.log('data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log('this is error: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }
}