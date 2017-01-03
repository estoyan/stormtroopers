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
var app_routing_module_1 = require('./routing/app-routing.module');
var core_module_1 = require('./core/core.module');
var page_loader_module_1 = require('./pages/page-loader.module');
//  Services
var auth_service_1 = require('./services/authentication/auth.service');
var requester_service_1 = require('./services/shared/requester.service');
var exception_service_1 = require('./services/shared/exception.service');
var toast_service_1 = require('./services/shared/toast.service');
var navbar_service_1 = require('./services/shared/navbar.service');
var local_storage_service_1 = require('./services/shared/local-storage.service');
// Guards
var authGuard_1 = require('./guards/authGuard');
var loggedInGuard_1 = require('./guards/loggedInGuard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                core_module_1.CoreModule,
                app_routing_module_1.AppRoutingModule,
                page_loader_module_1.PageLoaderModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                auth_service_1.AuthService,
                requester_service_1.RequesterService,
                exception_service_1.ExceptionService,
                toast_service_1.ToastService,
                authGuard_1.AuthGuard,
                loggedInGuard_1.LoggedInGuard,
                local_storage_service_1.LocalStorageService,
                navbar_service_1.NavbarService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
