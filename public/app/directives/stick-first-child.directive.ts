import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: '[stick-first-child]',
    host: { '(window:scroll)': 'track($event)' }
})

export class StickFirstChildDirective {
    private _className: string = 'stick';

    @Input('stickClass') set stickClass(className: string) {
        this._className = className || this._className;
    }

    constructor(private _el: ElementRef) {
        this._el = _el;
    }

    track($event: Event) {
        let firstChild = this._el.nativeElement.children[0];
        if (!firstChild) {
            $event.stopPropagation();
            throw 'No child element was found!';
        }

        if (this._el.nativeElement.getBoundingClientRect().top <= 0) {
            firstChild.classList.add(this._className);
        } else {
            firstChild.classList.remove(this._className);
        }
    }
}