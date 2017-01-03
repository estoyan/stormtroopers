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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var home_module_1 = require('./home/home.module');
var login_module_1 = require('./login/login.module');
var character_modul_1 = require('./characters/character.modul');
var register_component_1 = require('./register/register.component');
var page_not_fount_component_1 = require('./page-not-fount/page-not-fount.component');
var about_component_1 = require('./about/about.component');
var character_service_1 = require('../services/character/character.service');
var user_service_1 = require('../services/user/user.service');
var PageLoaderModule = (function () {
    function PageLoaderModule() {
    }
    PageLoaderModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, common_1.CommonModule, home_module_1.HomeModule, login_module_1.LoginModule],
            declarations: [register_component_1.RegisterComponent, page_not_fount_component_1.PageNotFoundComponent, about_component_1.AboutComponent],
            providers: [character_service_1.CharacterService, user_service_1.UserService],
            exports: [home_module_1.HomeModule, login_module_1.LoginModule, register_component_1.RegisterComponent, page_not_fount_component_1.PageNotFoundComponent, character_modul_1.CharacterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PageLoaderModule);
    return PageLoaderModule;
}());
exports.PageLoaderModule = PageLoaderModule;
//# sourceMappingURL=page-loader.module.js.map