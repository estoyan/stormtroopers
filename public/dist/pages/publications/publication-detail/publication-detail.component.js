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
var toast_service_1 = require('../../../services/shared/toast.service');
var publications_service_1 = require('../../../services/publications/publications.service');
var local_storage_service_1 = require('../../../services/shared/local-storage.service');
require('rxjs/add/operator/switchMap');
var PublicationDetailComponent = (function () {
    function PublicationDetailComponent(_publicationService, _route, _localeStorageService, _toastService) {
        this._publicationService = _publicationService;
        this._route = _route;
        this._localeStorageService = _localeStorageService;
        this._toastService = _toastService;
    }
    PublicationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params
            .switchMap(function (params) { return _this._publicationService.getPublicationById(params['id']); })
            .subscribe(function (p) {
            _this.publication = p;
        }, function (err) { return _this._toastService.activate(err, false); });
        this._username = this._localeStorageService.getUser().username;
    };
    PublicationDetailComponent.prototype.addComment = function (content) {
        var _this = this;
        var comment = { username: this._username, content: content };
        var publicationId = this.publication._id;
        this._publicationService.addComment(publicationId, comment)
            .subscribe(function (_) {
            _this.publication.comments.push(comment);
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    PublicationDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './publication-detail.component.html',
            styleUrls: ['./publication-detail.component.css']
        }), 
        __metadata('design:paramtypes', [publications_service_1.PublicatonsService, router_1.ActivatedRoute, local_storage_service_1.LocalStorageService, toast_service_1.ToastService])
    ], PublicationDetailComponent);
    return PublicationDetailComponent;
}());
exports.PublicationDetailComponent = PublicationDetailComponent;
//# sourceMappingURL=publication-detail.component.js.map