import { Component, Input, Output, OnInit, OnChanges } from '@angular/core';

import { AcStar } from './star';
import { ToastService } from '../../services/shared/toast.service';
import { AuthService } from '../../services/authentication/auth.service';
import { PublicatonsService } from '../../services/publications/publications.service';
import { LocalStorageService } from '../../services/shared/local-storage.service';
import { Publication } from '../../models/publication.model';

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
    <span *ngIf="!isOwner" class="user-rating">your rating: {{userRating}}</span>
    <span *ngIf="isOwner" class="user-rating">it's your image</span>
  `,
    styles: [
        `.user-rating { 
            font-size: 0.9em;
         }
        `
    ]
})

export class AcStars implements OnInit {
    @Input() starCount: number;
    @Input() rating: number;
    @Input() publication: Publication;
    private _rating = this.rating;
    isOwner: boolean;
    userRating: number;
    stars: number[] = [1, 2, 3, 4, 5];

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
        this.isOwner = loggedUser.username === this.publication.owner;
        this._rating = this.rating;
        let givenRate = this.publication.rating.find((x: any) => x.username === loggedUser.username);
        if (givenRate) {
            this.userRating = givenRate.rate;
        }
    }

    onRate(rate: number) {
        let isLoggedIn = this._authService.isLoggedIn();
        if (!isLoggedIn) {
            this._toastService.activate("Please login!", false);
            event.stopPropagation();
        }
        else if (this.isOwner) {
            this._toastService.activate("Invalid operation!", false);
            event.stopPropagation();
        }
        else {
            this._publicatonsService.rateProduct(this.publication._id, rate)
                .subscribe((p: Publication) => {
                    this.userRating = rate;
                    let sum = 0;
                    p.rating.forEach(x => sum += x.rate)
                    let count = p.rating.length;
                    this._rating = sum / count;
                });
        }
    }
}
