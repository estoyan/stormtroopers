import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../services/authentication/auth.service';
import { ToastService } from '../../services/shared/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
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
            .subscribe(data => {
                this._toastService.activate(`Welcome back tropper!`)
                this._location.back();
            })
    }
}