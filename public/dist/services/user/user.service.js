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
var requester_service_1 = require('../shared/requester.service');
var local_storage_service_1 = require('../shared/local-storage.service');
var REGISTER_USER_URL = '/api/sign-up';
var GET_CURRENT_USER_URL = '/api/user';
var UPDATE_URL = '/api/user/update';
var GET_USER_PUBLICATIONS_URL = '/api/user/publications';
var GET_USER_PAST_ORDERS_URL = '/api/user/pastorders';
var GET_USER_BASKET_URL = '/api/user/basket';
var PROCEED_USER_ORDERS_URL = '/api/user/basket/proceed';
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
        return this._requester
            .getJsonAuthorized(GET_CURRENT_USER_URL);
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        var userAsString = this._requester.createBody(user);
        return this._requester
            .postAuthorized(UPDATE_URL, userAsString)
            .do(function (data) { return _this._localeStorageService.updateToken(data.body); });
    };
    UserService.prototype.getUserPublications = function () {
        return this._requester
            .getJsonAuthorized(GET_USER_PUBLICATIONS_URL);
    };
    // TODO get Order[]
    UserService.prototype.getPastOrders = function () {
        return this._requester
            .getJsonAuthorized(GET_USER_PAST_ORDERS_URL);
    };
    UserService.prototype.getUserOrdersFromBasket = function () {
        return this._requester
            .getJsonAuthorized(GET_USER_BASKET_URL);
    };
    UserService.prototype.proceedUserOrders = function (orders) {
        return this._requester
            .getJsonAuthorized(PROCEED_USER_ORDERS_URL);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [requester_service_1.RequesterService, local_storage_service_1.LocalStorageService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map