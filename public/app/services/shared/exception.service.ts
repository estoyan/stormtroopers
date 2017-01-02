import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ExceptionService {
    constructor() { }

    catchBadResponse<T>(errorResponse: any): Observable<T> {
        return Observable.throw(errorResponse.json().msg || 'Server error');
    };
}