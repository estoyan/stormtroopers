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
var toast_service_1 = require('../../../services/shared/toast.service');
var PublicationListPageComponent = (function () {
    function PublicationListPageComponent(_publicationService, _toastService) {
        this._publicationService = _publicationService;
        this._toastService = _toastService;
        this.publications = [];
        this.currentPage = 1;
        this.maxSize = 10;
        this.itemsPerPage = 5;
        this.sortCriteria = 'createdAt false';
        this.filterProp = ['title'];
        this.sortProp = [
            {
                queryParam: 'createdAt false',
                displayValue: 'Newest'
            },
            {
                queryParam: 'createdAt true',
                displayValue: 'Oldest'
            },
            {
                queryParam: 'overalRating true',
                displayValue: 'Rating: Low to High'
            },
            {
                queryParam: 'overalRating false',
                displayValue: 'Rating: High to Low'
            }
        ];
        this.searchText = '';
        this.firstItemToShow = 0;
        this.lastItemToShow = this.itemsPerPage;
    }
    PublicationListPageComponent.prototype.filterChanged = function (searchText) {
        this.searchText = searchText;
    };
    PublicationListPageComponent.prototype.sortCollection = function (sortCriteria) {
        this.sortCriteria = sortCriteria;
    };
    PublicationListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._publicationService.getAllPublications()
            .subscribe(function (x) {
            for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
                var publication = x_1[_i];
                var ratingSum = 0;
                for (var _a = 0, _b = publication.rating; _a < _b.length; _a++) {
                    var rate = _b[_a];
                    ratingSum += rate.rate;
                }
                publication['overalRating'] = ratingSum / publication.rating.length;
            }
            _this.totalPublications = x.length;
            _this.publications = x;
        }, function (err) { return _this._toastService.activate(err, false); });
    };
    PublicationListPageComponent.prototype.pageChanged = function (event) {
        this.firstItemToShow = (event.page - 1) * this.itemsPerPage;
        this.lastItemToShow = this.firstItemToShow + this.itemsPerPage;
    };
    PublicationListPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './publication-list-page.component.html',
            styleUrls: ['./publication-list-page.component.css']
        }), 
        __metadata('design:paramtypes', [publications_service_1.PublicatonsService, toast_service_1.ToastService])
    ], PublicationListPageComponent);
    return PublicationListPageComponent;
}());
exports.PublicationListPageComponent = PublicationListPageComponent;
//# sourceMappingURL=publication-list-page.component.js.map