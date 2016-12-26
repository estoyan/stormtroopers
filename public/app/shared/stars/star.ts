import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ac-star',
    template: `<span class="star" [class.active]="active" (click)="handleRate($event)">&#9733;</span>`,
    styles: [`
    .star {
      color: #efefef;
      cursor: pointer;
      font-size: 3rem;
      transition: color .4s ease-in-out;
    }
    .star.active {
      color: #FFD600;
    }
    .star:hover {
        color: blue;
    }
  `]
})
export class AcStar {
    constructor() { }

    @Input() active: boolean;
    @Input() position: number;
    @Output() rate = new EventEmitter();

    handleRate(event: MouseEvent) {
        this.rate.emit(this.position);
    }
}