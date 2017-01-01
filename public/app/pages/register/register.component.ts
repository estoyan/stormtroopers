import { Component , trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/authentication/auth.service';
import { ToastService } from '../../services/shared/toast.service';

@Component({
    moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
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

export class RegisterComponent {
    newUser = {
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        email: ''
    };

    constructor(private _userService: UserService,
        private _authService: AuthService,
        private _router: Router,
        private _toasService: ToastService) { }

    onSubmit() {
        this._userService.register(this.newUser)
            .subscribe((user) => {
                this._authService.login({ username: this.newUser.username, password: this.newUser.password })
                    .subscribe(data => {
                        this._toasService.activate('Welcome on board trooper!')
                        this._router.navigate(['home']);
                    });
            });
    }
}