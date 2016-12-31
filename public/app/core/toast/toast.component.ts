import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from '../../services/shared/toast.service';

import { Subscription } from 'rxjs/Subscription'

@Component({
    moduleId: module.id,
    selector: 'st-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.css']
})

export class ToastComponent implements OnInit, OnDestroy {
    private _toastElement: any;
    private _toastSubscription: Subscription;

    message: string;

    constructor(private _toastService: ToastService) {
        this._toastSubscription = this._toastService.toastState.subscribe(toastMessage => {
            this.activate(toastMessage);
        })
    }

    ngOnInit() {
        this._toastElement = document.getElementById('toast-wrapper');
    }

    ngOnDestroy() {
        this._toastSubscription.unsubscribe();
    }

    activate(message: string) {
        this.message = message;
        this.show();
    }

    private show() {
        this._toastElement.style.opacity = 1;
        this._toastElement.style.zIndex = 9999;

        window.setTimeout(() => this.hide(), 2000);
    }

    private hide() {
        this._toastElement.style.opacity = 0;
        this._toastElement.style.zIndex = 0;
        window.setTimeout(() => this._toastElement.style.zIndex = 0, 400);
    }
}