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
var toast_service_1 = require('../../services/shared/toast.service');
var SUCCESS_COLOR = '#408000';
var FAIL_COLOR = '#FF0000';
var ToastComponent = (function () {
    function ToastComponent(_toastService) {
        var _this = this;
        this._toastService = _toastService;
        this._toastSubscription = this._toastService.toastState.subscribe(function (data) {
            _this.activate(data.message, data.success);
        });
    }
    ToastComponent.prototype.ngOnInit = function () {
        this._toastElement = document.getElementById('toast-wrapper');
    };
    ToastComponent.prototype.ngOnDestroy = function () {
        this._toastSubscription.unsubscribe();
    };
    ToastComponent.prototype.activate = function (message, success) {
        this.message = message;
        this.bgColor = success ? SUCCESS_COLOR : FAIL_COLOR;
        this.show();
    };
    ToastComponent.prototype.show = function () {
        var _this = this;
        this._toastElement.style.opacity = 1;
        this._toastElement.style.zIndex = 9999;
        window.setTimeout(function () { return _this.hide(); }, 2000);
    };
    ToastComponent.prototype.hide = function () {
        var _this = this;
        this._toastElement.style.opacity = 0;
        this._toastElement.style.zIndex = 0;
        window.setTimeout(function () { return _this._toastElement.style.zIndex = 0; }, 400);
    };
    ToastComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'st-toast',
            templateUrl: './toast.component.html',
            styleUrls: ['./toast.component.css']
        }), 
        __metadata('design:paramtypes', [toast_service_1.ToastService])
    ], ToastComponent);
    return ToastComponent;
}());
exports.ToastComponent = ToastComponent;
//# sourceMappingURL=toast.component.js.map