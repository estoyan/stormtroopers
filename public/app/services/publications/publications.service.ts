import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class PublicatonsService {
    private topImages: string = '/api/topimages';

    constructor(private _http: Http) {

    }
    getTopImages(): Observable<any> {
        return this._http
            .get(this.topImages)
            .map((response: Response) => <any>response.json())
            // .do(data => console.log('data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log('this is error: ' + error);
        return Observable.throw(error.json().error || 'Server error');
    }
}