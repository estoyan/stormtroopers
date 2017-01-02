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
var auth_service_1 = require('../../services/authentication/auth.service');
var navbar_service_1 = require('../../services/shared/navbar.service');
var local_storage_service_1 = require('../../services/shared/local-storage.service');
var NavComponent = (function () {
    function NavComponent(_authService, _navbarService, _localeStorageService) {
        this._authService = _authService;
        this._navbarService = _navbarService;
        this._localeStorageService = _localeStorageService;
        this.isCollapsed = true;
        this.disabled = false;
        this.status = { isopen: false };
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._updateUserInfoSubsciption = this._navbarService.getEmittedValue()
            .subscribe(function (newInfo) {
            _this.displayname = newInfo.displayname;
            _this.username = newInfo.username;
            _this.avatar = newInfo.avatarUrl;
            _this.side = _this.getSideColor(newInfo.side);
        });
        var user = this._localeStorageService.getUser();
        if (user) {
            this.displayname = user.displayname;
            this.username = user.username;
            this.avatar = user.avatarUrl;
            this.side = this.getSideColor(user.side);
        }
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this._updateUserInfoSubsciption.unsubscribe();
    };
    NavComponent.prototype.getSideColor = function (side) {
        switch (side) {
            case 'Dark': return 'red';
            case 'Light': return 'skyblue';
            default: return 'white';
        }
    };
    NavComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'st-nav',
            templateUrl: 'nav.component.html',
            styleUrls: ['nav.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, navbar_service_1.NavbarService, local_storage_service_1.LocalStorageService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map