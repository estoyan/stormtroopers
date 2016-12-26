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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var app_routing_module_1 = require('./routing/app-routing.module');
var core_module_1 = require('./core/core.module');
//  Pages
var cahracter_component_1 = require('./pages/characters/cahracter.component');
var page_not_fount_component_1 = require('./pages/page-not-fount/page-not-fount.component');
var home_component_1 = require('./pages/home/home.component');
var movie_component_1 = require('./pages/movies/movie.component');
var index_1 = require('./shared/index');
//  Services
var publications_service_1 = require('./services/publications/publications.service');
var products_service_1 = require('./services/products/products.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                core_module_1.CoreModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                cahracter_component_1.CharacterComponent,
                home_component_1.HomeComponent,
                movie_component_1.MoviesComponent,
                page_not_fount_component_1.PageNotFoundComponent,
                index_1.AcStar,
                index_1.AcStars
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                publications_service_1.PublicatonsService,
                products_service_1.ProductsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
