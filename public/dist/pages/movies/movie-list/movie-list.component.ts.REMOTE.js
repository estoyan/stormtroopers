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
var movie_service_1 = require('../../../services/movies/movie.service');
var forms_1 = require('@angular/forms');
var MovieListComponent = (function () {
    function MovieListComponent(movieService) {
        var _this = this;
        this.movieService = movieService;
        this.currentPage = 1;
        this.maxSize = 5;
        this.searchText = '';
        this.filter = new forms_1.FormControl();
        this.movies = [];
        this.detailedMovies = [];
        this.filter.valueChanges
            .debounceTime(400)
            .subscribe(function (filter) { return _this.searchMovie(filter); });
        // .movieService.search(term).then(items => this.items = items));
    }
    MovieListComponent.prototype.getMovies = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.movies = [];
        this.movieService.getMovies(page)
            .subscribe(function (newMovies) {
            _this.totalMovies = newMovies[1];
            for (var _i = 0, _a = newMovies[0]; _i < _a.length; _i++) {
                var newMovie = _a[_i];
                _this.getMovie(newMovie.Title);
            }
            // above code is making multiple http requests TODO check if it is ok
            // otherwise we miss movie Plots. Bellow  is the simple query.
            // this.movies.push(...newMovies[0]); 
        }, function (error) {
            console.log('error occurred here');
            console.log(error);
        });
    };
    MovieListComponent.prototype.getMovie = function (title) {
        var _this = this;
        this.movieService.getMovie(title)
            .subscribe(function (movie) {
            _this.movies.push(movie);
        });
    };
    MovieListComponent.prototype.searchMovie = function (filter) {
        var _this = this;
        this.movies = [];
        this.movieService.searchMovies(filter)
            .subscribe(function (newMovies) {
            _this.totalMovies = newMovies[1];
            for (var _i = 0, _a = newMovies[0]; _i < _a.length; _i++) {
                var newMovie = _a[_i];
                _this.getMovie(newMovie.Title);
            }
        }, function (error) {
            console.log('error occurred here');
            console.log(error);
        });
    };
    MovieListComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MovieListComponent.prototype.pageChanged = function (event) {
        this.getMovies(event.page);
    };
    MovieListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movie-list',
            templateUrl: './movie-list.component.html',
            styleUrls: ['movie-list.component.css']
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.ts.REMOTE.js.map