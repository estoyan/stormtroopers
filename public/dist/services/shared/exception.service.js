"use strict";
var Observable_1 = require('rxjs/Observable');
var ExceptionService = (function () {
    function ExceptionService() {
    }
    ExceptionService.prototype.catchBadResponse = function (errorResponse) {
        return Observable_1.Observable.throw(errorResponse.json().msg || 'Server error');
    };
    ;
    return ExceptionService;
}());
exports.ExceptionService = ExceptionService;
//# sourceMappingURL=exception.service.js.map