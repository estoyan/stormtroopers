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
var FilterComponent = (function () {
    function FilterComponent() {
        this.changed = new core_1.EventEmitter();
    }
    FilterComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.filter);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], FilterComponent.prototype, "changed", void 0);
    FilterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'st-filter',
            templateUrl: 'filter.component.html',
            styleUrls: ['./filter.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map