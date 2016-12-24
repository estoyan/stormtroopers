import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToastService {
    private _toastSubject = new Subject<string>();

    toastState = this._toastSubject.asObservable();

    activate(message: string) {
        this._toastSubject.next(message);
    }
}