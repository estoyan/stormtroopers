import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { AcStar } from './star';
import { ToastService } from '../../services/shared/toast.service';
import { AuthService } from '../../services/authentication/auth.service';
import { UserService } from '../../services/shared/user.service';

@Component({
    selector: 'ac-stars',
    template: `
    <div class="stars">
      <ac-star
        *ngFor="let star of stars"
        [active]="star <= _rating"
        (rate)="onRate($event)"
        [position]="star">
      </ac-star>
    </div>
  `
})
export class AcStars {
    @Input() starCount: number;
    @Input() rating: number;
    @Input() ownerUsername: boolean;
    @Output() newRate = new EventEmitter();
    private _isOwner: boolean;
    stars: number[] = [1, 2, 3, 4, 5];
    _rating = this.rating;

    constructor(
        private _toastService: ToastService,
        private _authService: AuthService,
        private _userService: UserService
    ) {
        const count = this.starCount < 0 ? 5 : this.starCount;
    }

    ngOnInit() {
        let loggedUser = this._userService.getUserFromLocalStorage() || {};
        this._isOwner = loggedUser.username === this.ownerUsername;
        this._rating = this.rating;
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
