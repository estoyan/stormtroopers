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
var CustomFilterPipe = (function () {
    function CustomFilterPipe() {
    }
    CustomFilterPipe.prototype.transform = function (originalList, data, props) {
        var filteredList;
        if (data && props && originalList) {
            data = data.toLowerCase();
            var filtered = originalList.filter(function (item) {
                var match = false;
                for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                    var prop = props_1[_i];
                    if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            filteredList = filtered;
        }
        else {
            filteredList = originalList;
        }
        return filteredList;
    };
    CustomFilterPipe = __decorate([
        core_1.Pipe({ name: 'customFilter' }), 
        __metadata('design:paramtypes', [])
    ], CustomFilterPipe);
    return CustomFilterPipe;
}());
exports.CustomFilterPipe = CustomFilterPipe;
//# sourceMappingURL=filter.pipe.js.map