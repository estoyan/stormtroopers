import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToastService {
    private _toastSubject = new Subject<Object>();

    toastState = this._toastSubject.asObservable();

    activate(message: string, success: boolean) {
        this._toastSubject.next({message, success});
    }
}
