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
var user_service_1 = require('../../../services/user/user.service');
var toast_service_1 = require('../../../services/shared/toast.service');
var ON_DELIVERY = 'On Delivery';
var BasketProceedComponent = (function () {
    function BasketProceedComponent(_userService, _router, _toastService) {
        this._userService = _userService;
        this._router = _router;
        this._toastService = _toastService;
        this.formModel = {};
        this.orders = [];
        this.paymentOptions = [ON_DELIVERY];
    }
    BasketProceedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getCurrentUser()
            .subscribe(function (user) {
            _this.formModel = user;
        }, function (err) { return _this._toastService.activate(err, false); });
        this._userService.getUserProceedingOrders()
            .subscribe(function (orders) {
            _this.orders = orders;
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    BasketProceedComponent.prototype.onSubmit = function () {
        var _this = this;
        var deliveryDetails = {
            firstname: this.formModel.firstname,
            lastname: this.formModel.lastname,
            phoneNumber: this.formModel.phoneNumber,
            address: this.formModel.address,
            paymentMethod: this.formModel.paymentMethod,
        };
        this._userService.payUserProceedingOrders(this.orders, deliveryDetails)
            .subscribe(function (_) {
            _this._router.navigate(['/home']);
            _this._toastService.activate('Successfully ordered products', true);
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    BasketProceedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './basket-proceed.component.html',
            styleUrls: ['./basket-proceed.component.css'],
            animations: [
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'translateX(-100%)' }),
                        core_1.animate(300)
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, toast_service_1.ToastService])
    ], BasketProceedComponent);
    return BasketProceedComponent;
}());
exports.BasketProceedComponent = BasketProceedComponent;
//# sourceMappingURL=basket-proceed.component.js.map