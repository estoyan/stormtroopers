import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AcStars } from './stars';

import { ToastService } from '../../services/shared/toast.service';
import { AuthService } from '../../services/authentication/auth.service';
import { UserService } from '../../services/shared/user.service';

@Component({
    selector: 'auth-ac-stars',
    template: `
    <ac-stars 
        [rating]="rating" 
        (newRate)="onRate($event)" 
        [starCount]="starCount">
    </ac-stars>
    `
})
export class AuthAcStars implements OnInit {
    private _isOwner: boolean;

    @Input() ownerUsername: boolean;
    @Input() starCount: number;
    @Input() rating: number;
    @Output() newRate = new EventEmitter();

    constructor(
        private _toastService: ToastService,
        private _authService: AuthService,
        private _userService: UserService
    ) { }

    ngOnInit() {
        let loggedUser = this._userService.getUserFromLocalStorage() || {};
        this._isOwner = loggedUser.username === this.ownerUsername;
    }

    onRate(star: any) {
        let isLoggedIn = this._authService.isLoggedIn();
        if (!isLoggedIn) {
            this._toastService.activate("Please login!");
            event.stopPropagation();
        }
        else if (this._isOwner) {
            this._toastService.activate("Invalid operation!");
            event.stopPropagation();
        }
        else {
            this.newRate.emit(star);
        }
    }
}
