import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: []
})
export class LoginComponent {
    localUser = {
        username: '',
        password: ''
    }
    highlightInput: boolean;

    constructor(private _authservice: AuthService, private _router: Router) { }

    onSubmit() {
        this._authservice.login(this.localUser)
            .subscribe(data => {
                this._router.navigate(['home']);
            })
    }
}