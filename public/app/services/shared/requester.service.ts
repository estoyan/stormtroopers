import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ExceptionService } from './exception.service';
import { LocalStorageService } from './local-storage.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequesterService {
    constructor(
        private _http: Http,
        private _exceptionService: ExceptionService,
        private _localeStorageService: LocalStorageService
    ) { }

    public createBody(obj: Object): string {
        let body = '';
        Object.keys(obj).forEach(key => body += `${key}=${obj[key]}&`);
        return body.slice(0, body.length - 1);
    }

    public getJson<T>(url: string, headers?: Headers): Observable<T> {
        headers = headers || new Headers();
        return this._http
            .get(url, { headers })
            .map((response: Response) => <T>response.json())
            .catch(this._exceptionService.catchBadResponse);
    }

    public getJsonAuthorized<T>(url: string, headers: Headers = new Headers()): Observable<T> {
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        return this.getJson(url, headers);
    }

    public post<T>(url: string, body: string, headers: Headers): Observable<T> {
        return this._http
            .post(url, body, { headers })
            .map((response: Response) => <T>response.json())
            .catch(this._exceptionService.catchBadResponse);
    }

    public postEncoded<T>(url: string, body: string, headers: Headers = new Headers()): Observable<T> {
        headers.append('Content-Type', 'application/X-www-form-urlencoded');

        return this.post(url, body, headers);
    }

    public postAuthorized<T>(url: string, body: string, headers: Headers = new Headers()): Observable<T> {
        headers.append('Authorization', `JWT ${this._localeStorageService.getToken()}`);

        return this.postEncoded(url, body, headers);
    }
}
