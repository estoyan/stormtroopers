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
var products_service_1 = require('../../services/products/products.service');
var toast_service_1 = require('../../services/shared/toast.service');
var auth_service_1 = require('../../services/authentication/auth.service');
var ProductDetailsModalComponent = (function () {
    function ProductDetailsModalComponent(_productService, _authService, _toasterService) {
        this._productService = _productService;
        this._authService = _authService;
        this._toasterService = _toasterService;
        this.addToBascketEvent = new core_1.EventEmitter();
    }
    ProductDetailsModalComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    ProductDetailsModalComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    ProductDetailsModalComponent.prototype.addToBascket = function (event) {
        var _this = this;
        event[0].preventDefault();
        var product = event[1];
        this._productService.addProductToBasket(product)
            .subscribe(function (data) {
            _this._toasterService.activate('Product was added to basket!', true);
            _this.addToBascketEvent.emit(data);
        }, function (err) {
            _this._toasterService.activate(err, false);
        });
    };
    ProductDetailsModalComponent.prototype.ngOnInit = function () {
        this.isLogedIn = this._authService.isLoggedIn();
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ProductDetailsModalComponent.prototype, "childModal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProductDetailsModalComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProductDetailsModalComponent.prototype, "addToBascketEvent", void 0);
    ProductDetailsModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'st-modal-product',
            templateUrl: './product-details-modal.component.html',
            styleUrls: ['./product-details-modal.component.css']
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductsService, auth_service_1.AuthService, toast_service_1.ToastService])
    ], ProductDetailsModalComponent);
    return ProductDetailsModalComponent;
}());
exports.ProductDetailsModalComponent = ProductDetailsModalComponent;
//# sourceMappingURL=product-details-modal.component.js.map