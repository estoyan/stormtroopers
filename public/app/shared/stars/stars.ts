import { Component, Input, Output, OnInit } from '@angular/core';

import { AcStar } from './star';
import { ToastService } from '../../services/shared/toast.service';
import { AuthService } from '../../services/authentication/auth.service';
import { PublicatonsService } from '../../services/publications/publications.service';
import { LocalStorageService } from '../../services/shared/local-storage.service';

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
    @Input() publicationId: string;
    private _isOwner: boolean;
    stars: number[] = [1, 2, 3, 4, 5];
    _rating = this.rating;

    constructor(
        private _toastService: ToastService,
        private _authService: AuthService,
        private _publicatonsService: PublicatonsService,
        private _localStorageService: LocalStorageService
    ) {
        const count = this.starCount < 0 ? 5 : this.starCount;
    }

    ngOnInit() {
        let loggedUser = this._localStorageService.getUser() || {};
        this._isOwner = loggedUser.username === this.ownerUsername;
        this._rating = this.rating;
    }

    onRate(rate: number) {
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
            this._publicatonsService.rateProduct(this.publicationId, rate)
                .subscribe(x => console.log(x));
        }
    }
}
