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
var CustomSortPipe = (function () {
    function CustomSortPipe() {
    }
    CustomSortPipe.prototype.transform = function (value, filter) {
        if (!value || !value.sort) {
            return value;
        }
        var temp = filter.split(' ');
        var filterCriteria = temp[0];
        var isAscending = temp[1];
        var result = value.sort(function (a, b) {
            if (a[filterCriteria] < b[filterCriteria]) {
                return -1;
            }
            if (a[filterCriteria] > b[filterCriteria]) {
                return 1;
            }
            return 0;
        });
        if (isAscending === 'true') {
            return result;
        }
        else {
            return result.reverse();
        }
    };
    CustomSortPipe = __decorate([
        core_1.Pipe({ name: 'customSort' }), 
        __metadata('design:paramtypes', [])
    ], CustomSortPipe);
    return CustomSortPipe;
}());
exports.CustomSortPipe = CustomSortPipe;
//# sourceMappingURL=sort.pipe.js.map