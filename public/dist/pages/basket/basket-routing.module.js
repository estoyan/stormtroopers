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
var basket_component_1 = require('./basket.component');
var basket_list_component_1 = require('./basket-list/basket-list.component');
var basket_buy_component_1 = require('./basket-buy/basket-buy.component');
var routes = [
    {
        path: '',
        component: basket_component_1.BasketComponent,
        children: [
            {
                path: '',
                component: basket_list_component_1.BasketListComponent
            },
            {
                path: 'buy',
                component: basket_buy_component_1.BasketBuyComponent
            }
        ]
    }
];
var BasketRoutingModule = (function () {
    function BasketRoutingModule() {
    }
    BasketRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], BasketRoutingModule);
    return BasketRoutingModule;
}());
exports.BasketRoutingModule = BasketRoutingModule;
exports.routedComponents = [
    basket_component_1.BasketComponent,
    basket_buy_component_1.BasketBuyComponent,
    basket_list_component_1.BasketListComponent
];
//# sourceMappingURL=basket-routing.module.js.map