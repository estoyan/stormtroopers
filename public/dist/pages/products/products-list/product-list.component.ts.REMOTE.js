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
var products_service_1 = require('../../../services/products/products.service');
var auth_service_1 = require('../../../services/authentication/auth.service');
var toast_service_1 = require('../../../services/shared/toast.service');
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _authService, _toasterService) {
        this._productService = _productService;
        this._authService = _authService;
        this._toasterService = _toasterService;
        this.products = [];
        this.isLogedIn = false;
        this.currentPage = 1;
        this.maxSize = 10;
        this.itemsPerPage = 10;
        this.sortCriteria = 'category';
        this.filterProp = ['title', 'description'];
        this.sortProp = [
            {
                queryParam: 'price true',
                displayValue: 'Price: Low to High'
            },
            {
                queryParam: 'price false',
                displayValue: 'Price: High to Low'
            },
            {
                queryParam: 'title',
                displayValue: 'Product Title'
            }];
        this.searchText = '';
        this.firstItemToShow = 0;
        this.lastItemToShow = this.itemsPerPage;
    }
    ProductListComponent.prototype.filterChanged = function (searchText) {
        this.searchText = searchText;
    };
    ProductListComponent.prototype.sortCollection = function (sortCriteria) {
        this.sortCriteria = sortCriteria;
    };
    ProductListComponent.prototype.addToBascket = function (event) {
        var _this = this;
        event[0].preventDefault();
        var product = event[1];
        this._productService.addProductToBasket(product)
            .subscribe(function (data) {
            _this._toasterService.activate('Product was added to basket!', true);
        }, function (err) {
            _this._toasterService.activate(err, false);
        });
    };
    ProductListComponent.prototype.pageChanged = function (event) {
        this.firstItemToShow = (event.page - 1) * this.itemsPerPage;
        this.lastItemToShow = this.firstItemToShow + this.itemsPerPage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getAllProducts()
            .subscribe(function (x) {
            _this.totalPublications = x.length;
            _this.products = x;
        }, function (err) {
            _this._toasterService.activate(err, false);
        });
        this.isLogedIn = this._authService.isLoggedIn();
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.componenet.css']
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductsService, auth_service_1.AuthService, toast_service_1.ToastService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.ts.REMOTE.js.map