import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class ExceptionService {
    constructor() { }

    catchBadResponse<T>(errorResponse: any): Observable<T> {
        console.log('this is error: ' + errorResponse);
        return Observable.throw(errorResponse.json().error || 'Server error');
    };
}