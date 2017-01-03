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
var Observable_1 = require('rxjs/Observable');
var movie_model_1 = require('../../../models/movie.model');
var movie_service_1 = require('../../../services/movies/movie.service');
var MovieResolver = (function () {
    function MovieResolver(movieService, router) {
        this.movieService = movieService;
        this.router = router;
    }
    MovieResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var title = route.params['title'];
        return this.movieService.getMovie(title)
            .map(function (movie) {
            if (movie) {
                return movie;
            }
            // Return a new object, because we're going to create a new one
            return new movie_model_1.Movie();
            // We could throw an error here and catch it
            // and route back to the speaker list
            // let msg = `vehicle id ${id} not found`;
            // console.log(msg);
            // throw new Error(msg)
        })
            .catch(function (error) {
            console.log(error + ". Heading back to vehicle list");
            _this.router.navigate(['/vehicles']);
            return Observable_1.Observable.from(null);
        });
    };
    MovieResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [movie_service_1.MovieService, router_1.Router])
    ], MovieResolver);
    return MovieResolver;
}());
exports.MovieResolver = MovieResolver;
/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/ 
//# sourceMappingURL=movie-resolver.service.js.map