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
var NavbarService = (function () {
    function NavbarService() {
        this.userInfo = new core_1.EventEmitter();
    }
    NavbarService.prototype.updateUserInfo = function (newInfo) {
        this.userInfo.emit(newInfo);
    };
    NavbarService.prototype.getEmittedValue = function () {
        return this.userInfo;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], NavbarService.prototype, "userInfo", void 0);
    NavbarService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NavbarService);
    return NavbarService;
}());
exports.NavbarService = NavbarService;
//# sourceMappingURL=navbar.service.js.map