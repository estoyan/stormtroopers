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
var authGuard_1 = require('../guards/authGuard');
var loggedInGuard_1 = require('../guards/loggedInGuard');
var index_1 = require('../pages/index');
var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', component: index_1.pages.login, canActivate: [loggedInGuard_1.LoggedInGuard] },
    { path: 'register', component: index_1.pages.register, canActivate: [loggedInGuard_1.LoggedInGuard] },
    { path: 'home', component: index_1.pages.home },
    { path: 'user/:username', loadChildren: 'app/pages/user/user.module#UserModule', canActivate: [authGuard_1.AuthGuard] },
    { path: 'characters', component: index_1.pages.characters },
    { path: 'movies', loadChildren: 'app/pages/movies/movies.module#MoviesModule' },
    { path: 'publications', loadChildren: 'app/pages/publications/publications.module#PublicationsModule' },
    { path: 'products', loadChildren: 'app/pages/products/products.module#ProductsModule' },
    { path: 'basket', loadChildren: 'app/pages/basket/basket.module#BasketModule', canActivate: [authGuard_1.AuthGuard] },
    { path: '**', pathMatch: 'full', component: index_1.pages.pageNotFound }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: router_1.PreloadAllModules })],
            exports: [router_1.RouterModule],
            // imports: [RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules })],
            // exports: [RouterModule],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map