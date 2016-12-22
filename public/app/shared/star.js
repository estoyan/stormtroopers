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
var AcStar = (function () {
    function AcStar() {
        this.rate = new core_1.EventEmitter();
    }
    AcStar.prototype.handleRate = function (event) {
        if (!this.isUserLogged) {
            event.stopPropagation();
        }
        else {
            this.rate.emit(this.position);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AcStar.prototype, "isUserLogged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AcStar.prototype, "active", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], AcStar.prototype, "position", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AcStar.prototype, "rate", void 0);
    AcStar = __decorate([
        core_1.Component({
            selector: 'ac-star',
            template: "<span class=\"star\" [class.active]=\"active\" (click)=\"handleRate($event)\">&#9733;</span>",
            styles: ["\n    .star {\n      color: #efefef;\n      cursor: pointer;\n      font-size: 3rem;\n      transition: color .4s ease-in-out;\n    }\n    .star.active {\n      color: #FFD600;\n    }\n    .star:hover {\n        color: blue;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AcStar);
    return AcStar;
}());
exports.AcStar = AcStar;
//# sourceMappingURL=star.js.map