import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ExceptionService } from './exception.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class RequesterService {
    constructor(
        private http: Http,
        private exceptionService: ExceptionService
    ) { }

    public getJson<T>(url: string): Observable<T> {
        return this.http
            .get(url)
            .map((response: Response) => <T>response.json())
            .catch(this.exceptionService.catchBadResponse);
    }
}