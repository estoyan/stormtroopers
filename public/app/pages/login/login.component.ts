import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../services/authentication/auth.service';
import { ToastService } from '../../services/shared/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(300)
            ])
        ])
    ]
})

export class LoginComponent {
    localUser = {
        username: '',
        password: ''
    }

    constructor(private _authservice: AuthService,
        private _toastService: ToastService,
        private _location: Location) { }

    onSubmit() {
        this._authservice.login(this.localUser)
            .subscribe((data: any) => {
                this._toastService.activate(`Welcome back tropper!`, true)
                this._location.back();
            },
            err => this._toastService.activate(err, false));
    }
}