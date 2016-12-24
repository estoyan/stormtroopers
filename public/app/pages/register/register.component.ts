import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';

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

    constructor(private _authservice: AuthService, private _router: Router) { }

    onSubmit() {
        this._authservice.register(this.newUser)
            .subscribe(() => {
                this._authservice.login({ username: this.newUser.username, password: this.newUser.password })
                    .subscribe(data => {
                        this._router.navigate(['home']);
                    })
            });
    }
}