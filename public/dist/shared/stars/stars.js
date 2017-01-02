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
var toast_service_1 = require('../../services/shared/toast.service');
var auth_service_1 = require('../../services/authentication/auth.service');
var publications_service_1 = require('../../services/publications/publications.service');
var local_storage_service_1 = require('../../services/shared/local-storage.service');
var AcStars = (function () {
    function AcStars(_toastService, _authService, _publicatonsService, _localStorageService) {
        this._toastService = _toastService;
        this._authService = _authService;
        this._publicatonsService = _publicatonsService;
        this._localStorageService = _localStorageService;
        this._rating = this.rating;
        this.stars = [1, 2, 3, 4, 5];
        var count = this.starCount < 0 ? 5 : this.starCount;
    }
    AcStars.prototype.ngOnInit = function () {
        var loggedUser = this._localStorageService.getUser() || {};
        this.isOwner = loggedUser.username === this.publication.owner;
        this._rating = this.rating;
        var givenRate = this.publication.rating.find(function (x) { return x.username === loggedUser.username; });
        if (givenRate) {
            this.userRating = givenRate.rate;
        }
    };
    AcStars.prototype.onRate = function (rate) {
        var _this = this;
        var isLoggedIn = this._authService.isLoggedIn();
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
                .subscribe(function (p) {
                _this.userRating = rate;
                var sum = 0;
                p.rating.forEach(function (x) { return sum += x.rate; });
                var count = p.rating.length;
                _this._rating = sum / count;
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AcStars.prototype, "starCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AcStars.prototype, "rating", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], AcStars.prototype, "publication", void 0);
    AcStars = __decorate([
        core_1.Component({
            selector: 'ac-stars',
            template: "\n    <div class=\"stars\">\n      <ac-star\n        *ngFor=\"let star of stars\"\n        [active]=\"star <= _rating\"\n        (rate)=\"onRate($event)\"\n        [position]=\"star\">\n      </ac-star>\n    </div>\n    <span *ngIf=\"!isOwner\" class=\"user-rating\">your rating: {{userRating}}</span>\n    <span *ngIf=\"isOwner\" class=\"user-rating\">it's your image</span>\n  ",
            styles: [
                ".user-rating { \n            font-size: 0.9em;\n         }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [toast_service_1.ToastService, auth_service_1.AuthService, publications_service_1.PublicatonsService, local_storage_service_1.LocalStorageService])
    ], AcStars);
    return AcStars;
}());
exports.AcStars = AcStars;
//# sourceMappingURL=stars.js.map