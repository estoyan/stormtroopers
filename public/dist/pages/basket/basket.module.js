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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var product_overview_module_1 = require('../../shared/product-overview/product-overview.module');
var basket_routing_module_1 = require('./basket-routing.module');
var stick_first_child_directive_1 = require('../../directives/stick-first-child.directive');
var products_service_1 = require('../../services/products/products.service');
var BasketModule = (function () {
    function BasketModule() {
    }
    BasketModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                basket_routing_module_1.BasketRoutingModule,
                product_overview_module_1.ProductOverviewModule,
                ng2_bootstrap_1.DropdownModule.forRoot()
            ],
            declarations: [
                basket_routing_module_1.routedComponents,
                stick_first_child_directive_1.StickFirstChildDirective
            ],
            providers: [products_service_1.ProductsService]
        }), 
        __metadata('design:paramtypes', [])
    ], BasketModule);
    return BasketModule;
}());
exports.BasketModule = BasketModule;
//# sourceMappingURL=basket.module.js.map