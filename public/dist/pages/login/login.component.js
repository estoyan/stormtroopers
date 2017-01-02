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
var common_1 = require('@angular/common');
var auth_service_1 = require('../../services/authentication/auth.service');
var toast_service_1 = require('../../services/shared/toast.service');
var LoginComponent = (function () {
    function LoginComponent(_authservice, _toastService, _location) {
        this._authservice = _authservice;
        this._toastService = _toastService;
        this._location = _location;
        this.localUser = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._authservice.login(this.localUser)
            .subscribe(function (data) {
            _this._toastService.activate("Welcome back tropper!", true);
            _this._location.back();
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
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
        __metadata('design:paramtypes', [auth_service_1.AuthService, toast_service_1.ToastService, common_1.Location])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map