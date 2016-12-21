import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AcStar } from './star';

@Component({
    selector: 'ac-stars',
    template: `
    <div class="stars">
      <ac-star
        *ngFor="let star of stars"
        [active]="star <= _rating"
        (rate)="onRate($event)"
        [position]="star"
        [isUserLogged]="isUserLogged"
      >
      </ac-star>
    </div>
  `
})
export class AcStars {
    @Input() isUserLogged: boolean;
    @Input() starCount: number;
    @Input() rating: number;
    // @Output() rate = new EventEmitter();
    @Output() newRate = new EventEmitter();
    stars: number[] = [1, 2, 3, 4, 5];
    _rating = this.rating;

    constructor() {
        const count = this.starCount < 0 ? 5 : this.starCount;
    }

    ngOnInit(){
        this._rating = this.rating;
    }

    onRate(star: any) {
        // this.rate.emit(star);
        this.newRate.emit(star);
        // this._rating = star;
    }
}