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
var publications_service_1 = require('../../services/publications/publications.service');
var products_service_1 = require('../../services/products/products.service');
var HomeComponent = (function () {
    function HomeComponent(publicatonsService, productService) {
        this.publicatonsService = publicatonsService;
        this.productService = productService;
        this.fullPath = 'static/app/assets/imgs/rougeone.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getRecentProducts()
            .subscribe(function (x) { return _this.recentProducts = x; });
        this.publicatonsService.getTopImages()
            .subscribe(function (x) { return _this.topImages = x; });
    };
    HomeComponent.prototype.setNewRate = function (event) {
        console.log('new Rate is: ', event);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [publications_service_1.PublicatonsService, products_service_1.ProductsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map