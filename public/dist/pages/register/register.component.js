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
var user_service_1 = require('../../services/user/user.service');
var auth_service_1 = require('../../services/authentication/auth.service');
var toast_service_1 = require('../../services/shared/toast.service');
var RegisterComponent = (function () {
    function RegisterComponent(_userService, _authService, _router, _toasService) {
        this._userService = _userService;
        this._authService = _authService;
        this._router = _router;
        this._toasService = _toasService;
        this.newUser = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            email: ''
        };
    }
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.register(this.newUser)
            .subscribe(function (user) {
            _this._authService.login({ username: _this.newUser.username, password: _this.newUser.password })
                .subscribe(function (data) {
                _this._toasService.activate('Welcome on board trooper!', true);
                _this._router.navigate(['home']);
            }, function (err) { return _this._toasService.activate(err, false); });
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
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
        __metadata('design:paramtypes', [user_service_1.UserService, auth_service_1.AuthService, router_1.Router, toast_service_1.ToastService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map