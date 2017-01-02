"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var StickFirstChildDirective = (function () {
    function StickFirstChildDirective(_el) {
        this._el = _el;
        this._className = 'stick';
        this._el = _el;
    }
    Object.defineProperty(StickFirstChildDirective.prototype, "stickClass", {
        set: function (className) {
            this._className = className || this._className;
        },
        enumerable: true,
        configurable: true
    });
    StickFirstChildDirective.prototype.track = function ($event) {
        var firstChild = this._el.nativeElement.children[0];
        if (!firstChild) {
            $event.stopPropagation();
            throw 'No child element was found!';
        }
        if (this._el.nativeElement.getBoundingClientRect().top <= 0) {
            firstChild.classList.add(this._className);
        }
        else {
            firstChild.classList.remove(this._className);
        }
    };
    __decorate([
        core_1.Input('stickClass'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], StickFirstChildDirective.prototype, "stickClass", null);
    StickFirstChildDirective = __decorate([
        core_1.Directive({
            selector: '[stick-first-child]',
            host: { '(window:scroll)': 'track($event)' }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], StickFirstChildDirective);
    return StickFirstChildDirective;
}());
exports.StickFirstChildDirective = StickFirstChildDirective;

//# sourceMappingURL=stick-first-child.directive.js.map
