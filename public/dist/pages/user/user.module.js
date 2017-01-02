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
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var user_routing_module_1 = require('./user-routing.module');
var publications_overview_module_1 = require('../../shared/publication-overview/publications-overview.module');
var product_overview_module_1 = require('../../shared/product-overview/product-overview.module');
// import { SharedModule } from '../../shared/shared.module';
var stars_module_1 = require('../../shared/stars/stars.module');
var user_routing_module_2 = require('./user-routing.module');
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [user_routing_module_1.UserRoutingModule, forms_1.FormsModule, common_1.CommonModule, stars_module_1.StarsModule, publications_overview_module_1.PublicationsOverviewModule, product_overview_module_1.ProductOverviewModule],
            declarations: [user_routing_module_2.routedComponents],
            providers: [ng2_bootstrap_1.Ng2BootstrapModule]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map