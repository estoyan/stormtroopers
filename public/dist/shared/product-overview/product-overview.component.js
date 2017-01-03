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
var ProductOverviewComponent = (function () {
    function ProductOverviewComponent() {
        this.addToBascketEvent = new core_1.EventEmitter();
    }
    ProductOverviewComponent.prototype.onAddToBasket = function (data) {
        this.addToBascketEvent.emit(data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductOverviewComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ProductOverviewComponent.prototype, "addToBascketEvent", void 0);
    ProductOverviewComponent = __decorate([
        core_1.Component({
            selector: 'st-product-overview',
            moduleId: module.id,
            templateUrl: './product-overview.component.html',
            styleUrls: ['./product-overview.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ProductOverviewComponent);
    return ProductOverviewComponent;
}());
exports.ProductOverviewComponent = ProductOverviewComponent;
//# sourceMappingURL=product-overview.component.js.map