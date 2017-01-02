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
var local_storage_service_1 = require('../../services/shared/local-storage.service');
var AuthAcStars = (function () {
    function AuthAcStars(_toastService, _authService, _localeStorageService) {
        this._toastService = _toastService;
        this._authService = _authService;
        this._localeStorageService = _localeStorageService;
        this.newRate = new core_1.EventEmitter();
    }
    AuthAcStars.prototype.ngOnInit = function () {
        var loggedUser = this._localeStorageService.getUser() || {};
        this._isOwner = loggedUser.username === this.ownerUsername;
    };
    AuthAcStars.prototype.onRate = function (star) {
        var isLoggedIn = this._authService.isLoggedIn();
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
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AuthAcStars.prototype, "ownerUsername", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AuthAcStars.prototype, "starCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AuthAcStars.prototype, "rating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AuthAcStars.prototype, "newRate", void 0);
    AuthAcStars = __decorate([
        core_1.Component({
            selector: 'auth-ac-stars',
            template: "\n    <ac-stars \n        [rating]=\"rating\" \n        (newRate)=\"onRate($event)\" \n        [starCount]=\"starCount\">\n    </ac-stars>\n    "
        }), 
        __metadata('design:paramtypes', [toast_service_1.ToastService, auth_service_1.AuthService, local_storage_service_1.LocalStorageService])
    ], AuthAcStars);
    return AuthAcStars;
}());
exports.AuthAcStars = AuthAcStars;
//# sourceMappingURL=auth-stars.js.map