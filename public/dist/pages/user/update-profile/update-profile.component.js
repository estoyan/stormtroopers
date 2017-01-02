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
var navbar_service_1 = require('../../../services/shared/navbar.service');
var toast_service_1 = require('../../../services/shared/toast.service');
var UpdateProfileComponent = (function () {
    function UpdateProfileComponent(_router, _userService, _navbarService, _toasService) {
        this._router = _router;
        this._userService = _userService;
        this._navbarService = _navbarService;
        this._toasService = _toasService;
        this.currentUser = {};
        this.avatarOptions = ['Stormtrooper', 'Darth Vaider', 'Boba Fett', 'Empire', 'Rebels'];
        this.sideOptions = ['Dark', 'Light', 'Neutral'];
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser()
            .subscribe(function (x) { return _this.currentUser = x; }, function (err) { return _this._toasService.activate(err, false); });
    };
    UpdateProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.updateUser(this.currentUser)
            .subscribe(function (data) {
            _this._navbarService.updateUserInfo(data.body);
            _this._toasService.activate('Trooper info successfully updated!', true);
            _this._router.navigate([("user/" + data.user.username)]);
        }, function (err) { return _this._toasService.activate(err, false); });
    };
    UpdateProfileComponent.prototype.setUserAvatar = function (value) {
        this.currentUser.avatarName = value;
    };
    UpdateProfileComponent.prototype.setUserSide = function (value) {
        this.currentUser.side = value;
    };
    UpdateProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './update-profile.component.html',
            styleUrls: ['./update-profile.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, navbar_service_1.NavbarService, toast_service_1.ToastService])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());
exports.UpdateProfileComponent = UpdateProfileComponent;
//# sourceMappingURL=update-profile.component.js.map