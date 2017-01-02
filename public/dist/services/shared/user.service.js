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
var http_1 = require('@angular/http');
var requester_service_1 = require('../shared/requester.service');
var local_storage_service_1 = require('./local-storage.service');
var REGISTER_USER_URL = '/api/sign-up';
var GET_CURRENT_USER_URL = '/api/user';
var UPDATE_URL = '/api/update';
var GET_USER_PUBLICATIONS = '/api/user/publications';
var UserService = (function () {
    function UserService(_requester, _localeStorageService) {
        this._requester = _requester;
        this._localeStorageService = _localeStorageService;
    }
    UserService.prototype.register = function (userInfo) {
        var userInfoAsString = this._requester.createBody(userInfo);
        return this._requester
            .postEncoded(REGISTER_USER_URL, userInfoAsString);
    };
    UserService.prototype.getCurrentUser = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', "JWT " + this._localeStorageService.getToken());
        return this._requester
            .getJson(GET_CURRENT_USER_URL, headers);
    };
    UserService.prototype.updateUser = function (user) {
        var userAsString = this._requester.createBody(user);
        var headers = new http_1.Headers();
        headers.append('Authorization', "JWT " + this._localeStorageService.getToken());
        return this._requester
            .postEncoded(UPDATE_URL, userAsString, headers)
            .do(function (data) { return window.localStorage.setItem('user', JSON.stringify(data.body)); });
    };
    UserService.prototype.getUserPublications = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', "JWT " + this._localeStorageService.getToken());
        return this._requester
            .getJson(GET_USER_PUBLICATIONS, headers);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [requester_service_1.RequesterService, local_storage_service_1.LocalStorageService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map