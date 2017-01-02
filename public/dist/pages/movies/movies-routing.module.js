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
var movies_component_1 = require('./movies.component');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var movie_component_1 = require('./movie/movie.component');
var routes = [
    {
        path: '',
        component: movies_component_1.MoviesComponent,
        children: [
            {
                path: '',
                component: movie_list_component_1.MovieListComponent,
            },
            {
                path: ':title',
                component: movie_component_1.MovieComponent,
            },
        ]
    },
];
var MovieRoutingModule = (function () {
    function MovieRoutingModule() {
    }
    MovieRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], MovieRoutingModule);
    return MovieRoutingModule;
}());
exports.MovieRoutingModule = MovieRoutingModule;
exports.routedComponents = [movie_component_1.MovieComponent, movies_component_1.MoviesComponent, movie_list_component_1.MovieListComponent];
//# sourceMappingURL=movies-routing.module.js.map