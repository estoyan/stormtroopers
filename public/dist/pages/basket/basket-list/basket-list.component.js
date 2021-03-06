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
var toast_service_1 = require('../../../services/shared/toast.service');
var user_service_1 = require('../../../services/user/user.service');
var SELECTION_COUNT = 12;
var SELECTED = 'Selected';
var ALL = 'All';
var BasketListComponent = (function () {
    function BasketListComponent(_userService, _router, _toastService) {
        this._userService = _userService;
        this._router = _router;
        this._toastService = _toastService;
        this.orders = [];
        this.selections = [];
        this.quantityOptions = [];
        this.removeOptions = [SELECTED, ALL];
    }
    BasketListComponent.prototype.ngOnInit = function () {
        this.loadOrders();
        for (var i = 1; i <= SELECTION_COUNT; i += 1) {
            this.quantityOptions.push(i);
        }
    };
    BasketListComponent.prototype.onProductSelect = function (index) {
        this.selections[index].isSelected = !this.selections[index].isSelected;
    };
    BasketListComponent.prototype.onPriceSelect = function (value, index) {
        this.orders[index].quantity = value;
        this.orders[index].total = value * this.orders[index].product.price;
    };
    BasketListComponent.prototype.sumTotal = function () {
        var sum = 0;
        for (var i = 0; i < this.orders.length; i += 1) {
            if (this.selections[i].isSelected) {
                sum += this.orders[i].total;
            }
        }
        return sum;
    };
    BasketListComponent.prototype.onRemove = function () {
        var selectedOrders = this.getSelectedOrders();
        if (this.removeSelection === SELECTED) {
            if (selectedOrders.length === 0) {
                this._toastService.activate('Please select orders', false);
                return;
            }
            this.removeSelectedOrders(selectedOrders);
        }
        else if (this.removeSelection === ALL) {
            this.removeAllOrders();
        }
    };
    BasketListComponent.prototype.onProceed = function () {
        var _this = this;
        var selectedOrders = this.getSelectedOrders();
        if (selectedOrders.length === 0) {
            this._toastService.activate('Please select orders', false);
            return;
        }
        this._userService.proceedUserOrders(selectedOrders)
            .subscribe(function (_) {
            _this._router.navigate(['/basket/proceed']);
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    BasketListComponent.prototype.onAddToBasket = function (orders) {
        this.loadOrders();
    };
    BasketListComponent.prototype.loadOrders = function () {
        var _this = this;
        this._userService.getUserOrdersFromBasket()
            .subscribe(function (orders) {
            _this.orders = orders;
            _this.populatSelections(_this.orders);
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    BasketListComponent.prototype.populatSelections = function (orders) {
        var _this = this;
        this.selections = [];
        orders.forEach(function (o) {
            _this.selections.push({
                isSelected: true
            });
        });
    };
    BasketListComponent.prototype.getSelectedOrders = function () {
        var selectedOrders = [];
        for (var i = 0; i < this.orders.length; i += 1) {
            if (this.selections[i].isSelected) {
                selectedOrders.push(this.orders[i]);
            }
        }
        return selectedOrders;
    };
    BasketListComponent.prototype.removeSelectedOrders = function (selectedOrders) {
        var _this = this;
        this._userService.removeUserOrdersFromBasket(selectedOrders)
            .subscribe(function (_) {
            var newOrders = [];
            for (var i = 0; i < _this.orders.length; i += 1) {
                if (!_this.selections[i].isSelected) {
                    newOrders.push(_this.orders[i]);
                }
            }
            _this.orders = newOrders;
            _this._toastService.activate('Successfully removed from basket', true);
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    BasketListComponent.prototype.removeAllOrders = function () {
        var _this = this;
        this._userService.removeUserOrdersFromBasket(this.orders)
            .subscribe(function (_) {
            _this.orders = [];
            _this._toastService.activate('Successfully removed from basket', true);
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    BasketListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './basket-list.component.html',
            styleUrls: ['./basket-list.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, toast_service_1.ToastService])
    ], BasketListComponent);
    return BasketListComponent;
}());
exports.BasketListComponent = BasketListComponent;
//# sourceMappingURL=basket-list.component.js.map