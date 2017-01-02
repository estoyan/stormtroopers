import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[color]',
  inputs: ['colour:color']
})
export class ColorDirective {
  constructor(private _el: ElementRef) {
    this._el = _el;
  }

  set colour(color: string) {
    this._el.nativeElement.style.color = color;
  }
}
