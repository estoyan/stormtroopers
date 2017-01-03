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
var publications_service_1 = require('../../../services/publications/publications.service');
var toast_service_1 = require('../../../services/shared/toast.service');
var PublicationCreateComponent = (function () {
    function PublicationCreateComponent(_publicationsService, _toastService, _router) {
        this._publicationsService = _publicationsService;
        this._toastService = _toastService;
        this._router = _router;
        this.publication = {
            title: '',
            imageUrl: ''
        };
    }
    PublicationCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this._publicationsService.addPublication(this.publication.title, this.publication.imageUrl)
            .subscribe(function (data) {
            _this._toastService.activate('Successfully added publication!', true);
            _this._router.navigate(['publications']);
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    PublicationCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './publication-create.component.html',
            styleUrls: ['./publication-create.component.css']
        }), 
        __metadata('design:paramtypes', [publications_service_1.PublicatonsService, toast_service_1.ToastService, router_1.Router])
    ], PublicationCreateComponent);
    return PublicationCreateComponent;
}());
exports.PublicationCreateComponent = PublicationCreateComponent;
//# sourceMappingURL=publication-create.component.js.map