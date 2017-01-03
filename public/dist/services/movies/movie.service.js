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
var exception_service_1 = require('../shared/exception.service');
var omdbapi = 'https://www.omdbapi.com/';
var starWarsmoviesSearch = '?s=%22Star%20Wars%22&type=movie';
var MovieService = (function () {
    function MovieService(http, exceptionService) {
        this.http = http;
        this.exceptionService = exceptionService;
    }
    MovieService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json ? res.json() : null;
        var results;
        if (body.Search) {
            results = body && body.Search || {};
        }
        else {
            results = body;
        }
        var total = body && body.totalResults || {};
        return [results, total];
    };
    MovieService.prototype.getMovies = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        return this.http
            .get(omdbapi + starWarsmoviesSearch + ("&page=" + page))
            .map(function (res) { return _this.extractData(res); })
            .catch(this.exceptionService.catchBadResponse);
    };
    MovieService.prototype.searchMovies = function (pattern) {
        var _this = this;
        return this.http
            .get(omdbapi + '?s=' + pattern)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.exceptionService.catchBadResponse);
    };
    MovieService.prototype.getMovie = function (title) {
        title = title.replace(/([ ])/g, '%20');
        return this.http
            .get(omdbapi + "?t=" + title + "&plot=full")
            .map(function (res) { return res = res.json(); })
            .catch(this.exceptionService.catchBadResponse);
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, exception_service_1.ExceptionService])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map