import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ExceptionService } from './exception.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequesterService {
    constructor(
        private _http: Http,
        private _exceptionService: ExceptionService
    ) { }

    public getJson<T>(url: string): Observable<T> {
        return this._http
            .get(url)
            .map((response: Response) => <T>response.json())
            .catch(this._exceptionService.catchBadResponse);
    }

    public post<T>(url: string, body: string, headers: Headers): Observable<T> {
        return this._http
            .post(url, body, {headers})
            .map((response: Response) => <T>response.json())
            .catch(this._exceptionService.catchBadResponse);
    }
}