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
require('rxjs/add/observable/throw');
var requester_service_1 = require('../shared/requester.service');
var local_storage_service_1 = require('../shared/local-storage.service');
var navbar_service_1 = require('../shared/navbar.service');
var LOGIN_URL = '/api/sing-in';
var AuthService = (function () {
    function AuthService(_requester, _localeStarageService, _navbarService) {
        this._requester = _requester;
        this._localeStarageService = _localeStarageService;
        this._navbarService = _navbarService;
    }
    AuthService.prototype.login = function (userCreds) {
        var _this = this;
        var body = "username=" + userCreds.username + "&password=" + userCreds.password;
        return this._requester
            .postEncoded(LOGIN_URL, body)
            .do(function (data) {
            _this._navbarService.updateUserInfo(data.body);
            _this._localeStarageService.updateToken(data.body);
        });
    };
    AuthService.prototype.logout = function () {
        this._navbarService.updateUserInfo({ side: 'neutral' });
        this._localeStarageService.deleteUser();
    };
    AuthService.prototype.isLoggedIn = function () {
        var isUserLoggedIn = this._localeStarageService.getUser();
        if (isUserLoggedIn) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [requester_service_1.RequesterService, local_storage_service_1.LocalStorageService, navbar_service_1.NavbarService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map