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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var filter_module_1 = require('../../shared/filter/filter.module');
var movies_routing_module_1 = require('./movies-routing.module');
var movie_component_1 = require('./movie/movie.component');
var movie_list_component_1 = require('./movie-list/movie-list.component');
var movie_service_1 = require('../../services/movies/movie.service');
var MoviesModule = (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        core_1.NgModule({
            imports: [movies_routing_module_1.MovieRoutingModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, common_1.CommonModule, ng2_bootstrap_1.PaginationModule.forRoot(), filter_module_1.FilterModule],
            declarations: [movies_routing_module_1.routedComponents, movie_component_1.MovieComponent, movie_list_component_1.MovieListComponent],
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesModule);
    return MoviesModule;
}());
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map