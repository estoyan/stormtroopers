import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';
import { ToastService } from '../../services/shared/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    newUser = {
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        email: ''
    }
    highlightInput: boolean;

    constructor(private _authservice: AuthService,
        private _router: Router,
        private _toasService: ToastService) { }

    onSubmit() {
        this._authservice.register(this.newUser)
            .subscribe(() => {
                this._authservice.login({ username: this.newUser.username, password: this.newUser.password })
                    .subscribe(data => {
                        this._toasService.activate('Welcome on board trooper!')
                        this._router.navigate(['home']);

                        let userElement = document.getElementById('navbar-name');
                        userElement.setAttribute('href', `/${data.username}`);
                        userElement.innerHTML = data.displayname;
                    });
            });
    }
}