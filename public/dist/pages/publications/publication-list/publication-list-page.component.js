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
var publications_service_1 = require('../../../services/publications/publications.service');
var PublicationListPageComponent = (function () {
    function PublicationListPageComponent(_publicationService) {
        this._publicationService = _publicationService;
        this.currentPage = 1;
        this.maxSize = 10;
        this.itemsPerPage = 5;
        // this.totalPublications = 11;
    }
    PublicationListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._publicationService.getAllPublications()
            .subscribe(function (x) {
            _this.totalPublications = x.length;
            _this.publications = x;
            _this.showedPublications = _this.publications.slice(0, _this.itemsPerPage);
        });
    };
    PublicationListPageComponent.prototype.setNewRate = function (event) {
        console.log('new Rate is: ', event);
    };
    PublicationListPageComponent.prototype.pageChanged = function (event) {
        var currentItem = (event.page - 1) * this.itemsPerPage;
        this.showedPublications = this.publications.slice(currentItem, this.itemsPerPage + currentItem);
    };
    PublicationListPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './publication-list-page.component.html',
            styleUrls: ['./publication-list-page.component.css']
        }), 
        __metadata('design:paramtypes', [publications_service_1.PublicatonsService])
    ], PublicationListPageComponent);
    return PublicationListPageComponent;
}());
exports.PublicationListPageComponent = PublicationListPageComponent;
//# sourceMappingURL=publication-list-page.component.js.map