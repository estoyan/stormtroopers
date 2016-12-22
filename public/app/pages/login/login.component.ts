import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
    moduleId: module.id,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent {
    localUser = {
        username: '',
        password: ''
    }

    constructor(private authservice: AuthService) { }

    onSubmit() {
        this.authservice.loginfn(this.localUser);
        // this.authservice.loginfn(this.localUser).then((res) => {
        //     if (res) {
        //         // this._router.navigate(['Dashboard']);
        //     } else {
        //         console.log(res);
        //     }
        // })
    }

    clearfields() {
        this.localUser.username = '';
        this.localUser.password = '';
    }
}