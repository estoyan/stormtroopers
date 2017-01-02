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
var publications_overview_module_1 = require('./publication-overview/publications-overview.module');
var product_overview_module_1 = require('./product-overview/product-overview.module');
var stars_module_1 = require('./stars/stars.module');
var filter_module_1 = require('./filter/filter.module');
var sort_module_1 = require('./sort/sort.module');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                filter_module_1.FilterModule,
                sort_module_1.SortModule,
                stars_module_1.StarsModule,
                product_overview_module_1.ProductOverviewModule,
                publications_overview_module_1.PublicationsOverviewModule
            ],
            exports: [
                filter_module_1.FilterModule,
                sort_module_1.SortModule,
                stars_module_1.StarsModule,
                product_overview_module_1.ProductOverviewModule,
                publications_overview_module_1.PublicationsOverviewModule
            ],
            declarations: []
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map