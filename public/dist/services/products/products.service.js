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
var requester_service_1 = require('../shared/requester.service');
var RECENT_PRODUCTS_URL = '/api/recentproducts';
var PRODUCTS_URL = '/api/allProducts';
var ADD_PRODUCT_TO_BASKET_URL = '/api/user/addproduct';
var ProductsService = (function () {
    function ProductsService(_requester) {
        this._requester = _requester;
    }
    ProductsService.prototype.getRecentProducts = function () {
        return this._requester
            .getJson(RECENT_PRODUCTS_URL);
    };
    ProductsService.prototype.getAllProducts = function () {
        return this._requester
            .getJson(PRODUCTS_URL);
    };
    ProductsService.prototype.getProductById = function (id) {
        var productUrl = PRODUCTS_URL + ("/" + id);
        return this._requester
            .getJson(productUrl);
    };
    ProductsService.prototype.addProductToBasket = function (product) {
        var _id = product._id, body = this._requester.createBody({ _id: _id });
        return this._requester
            .postAuthorized(ADD_PRODUCT_TO_BASKET_URL, body);
    };
    ProductsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [requester_service_1.RequesterService])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map