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
var core_1 = require('@angular/core');
var AcStars = (function () {
    function AcStars() {
        // @Output() rate = new EventEmitter();
        this.newRate = new core_1.EventEmitter();
        this.stars = [1, 2, 3, 4, 5];
        this._rating = this.rating;
        var count = this.starCount < 0 ? 5 : this.starCount;
    }
    AcStars.prototype.ngOnInit = function () {
        this._rating = this.rating;
    };
    AcStars.prototype.onRate = function (star) {
        // this.rate.emit(star);
        this.newRate.emit(star);
        // this._rating = star;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AcStars.prototype, "isUserLogged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AcStars.prototype, "starCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AcStars.prototype, "rating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AcStars.prototype, "newRate", void 0);
    AcStars = __decorate([
        core_1.Component({
            selector: 'ac-stars',
            template: "\n    <div class=\"stars\">\n      <ac-star\n        *ngFor=\"let star of stars\"\n        [active]=\"star <= _rating\"\n        (rate)=\"onRate($event)\"\n        [position]=\"star\"\n        [isUserLogged]=\"isUserLogged\"\n      >\n      </ac-star>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AcStars);
    return AcStars;
}());
exports.AcStars = AcStars;
//# sourceMappingURL=stars.js.map