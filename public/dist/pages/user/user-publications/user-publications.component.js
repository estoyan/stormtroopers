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
var router_1 = require('@angular/router');
var user_service_1 = require('../../../services/user/user.service');
var toast_service_1 = require('../../../services/shared/toast.service');
var UserPublicationsComponent = (function () {
    function UserPublicationsComponent(_router, _userService, _toastService) {
        this._router = _router;
        this._userService = _userService;
        this._toastService = _toastService;
    }
    UserPublicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserPublications()
            .subscribe(function (publ) { return _this.publications = publ; }, function (err) { return _this._toastService.activate(err, false); });
    };
    UserPublicationsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './user-publications.component.html',
            styleUrls: ['./user-publications.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, toast_service_1.ToastService])
    ], UserPublicationsComponent);
    return UserPublicationsComponent;
}());
exports.UserPublicationsComponent = UserPublicationsComponent;
//# sourceMappingURL=user-publications.component.js.map