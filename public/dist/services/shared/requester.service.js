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
var exception_service_1 = require('./exception.service');
var local_storage_service_1 = require('./local-storage.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var RequesterService = (function () {
    function RequesterService(_http, _exceptionService, _localeStorageService) {
        this._http = _http;
        this._exceptionService = _exceptionService;
        this._localeStorageService = _localeStorageService;
    }
    RequesterService.prototype.createBody = function (obj) {
        var body = '';
        var keys = Object.keys(obj);
        Object.keys(obj).forEach(function (key) { return body += key + "=" + obj[key] + "&"; });
        return body.slice(0, body.length - 1);
    };
    RequesterService.prototype.getJson = function (url, headers) {
        headers = headers || new http_1.Headers();
        return this._http
            .get(url, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this._exceptionService.catchBadResponse);
    };
    RequesterService.prototype.getJsonAuthorized = function (url, headers) {
        if (headers === void 0) { headers = new http_1.Headers(); }
        headers.append('Authorization', "JWT " + this._localeStorageService.getToken());
        return this.getJson(url, headers);
    };
    RequesterService.prototype.post = function (url, body, headers) {
        return this._http
            .post(url, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this._exceptionService.catchBadResponse);
    };
    RequesterService.prototype.postEncoded = function (url, body, headers) {
        if (headers === void 0) { headers = new http_1.Headers(); }
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this.post(url, body, headers);
    };
    RequesterService.prototype.postAuthorized = function (url, body, headers) {
        if (headers === void 0) { headers = new http_1.Headers(); }
        headers.append('Authorization', "JWT " + this._localeStorageService.getToken());
        return this.postEncoded(url, body, headers);
    };
    RequesterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, exception_service_1.ExceptionService, local_storage_service_1.LocalStorageService])
    ], RequesterService);
    return RequesterService;
}());
exports.RequesterService = RequesterService;
//# sourceMappingURL=requester.service.js.map