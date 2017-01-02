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
var SortComponent = (function () {
    function SortComponent() {
        this.sort = new core_1.EventEmitter();
    }
    SortComponent.prototype.sortCollection = function (event) {
        // event.preventDefault();
        this.sort.emit(this.sortCriteria);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SortComponent.prototype, "sortProp", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SortComponent.prototype, "sort", void 0);
    SortComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'st-sort',
            templateUrl: './sort.component.html',
            styleUrls: ['./sort.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], SortComponent);
    return SortComponent;
}());
exports.SortComponent = SortComponent;
//# sourceMappingURL=sort.component.js.map