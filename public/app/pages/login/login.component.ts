import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    highlightInput: boolean;

    constructor(private _authservice: AuthService,
        private _router: Router,
        private _toastService: ToastService) { }

    onSubmit() {
        this._authservice.login(this.localUser)
            .subscribe(data => {
                this._toastService.activate(`Welcome back tropper!`)
                this._router.navigate(['home']);
                // console.log(JSON.parse(window.localStorage.getItem('user')));
                // let userElement = document.getElementById('navbar-name');
                // userElement.setAttribute('href', `/${data.body.username}`);
                // userElement.innerHTML = data.body.displayname;
            })
    }
}