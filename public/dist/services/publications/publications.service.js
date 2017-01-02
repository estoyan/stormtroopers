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
var requester_service_1 = require('../shared/requester.service');
var local_storage_service_1 = require('../shared/local-storage.service');
var TOP_PUBLICATIONS_URL = 'api/publications/top';
var PUBLICATIONS_URL = 'api/publications';
var RATE_PUBLICATION = '/api/ratepublication';
var PUBLICATION_COMMENT_URL = '/api/publication/comment';
var PUBLICATION_URL = 'api/publication';
var PublicatonsService = (function () {
    function PublicatonsService(_requester, _localeStorageService) {
        this._requester = _requester;
        this._localeStorageService = _localeStorageService;
    }
    PublicatonsService.prototype.getTopPublications = function () {
        return this._requester
            .getJson(TOP_PUBLICATIONS_URL);
    };
    PublicatonsService.prototype.getAllPublications = function () {
        return this._requester
            .getJson(PUBLICATIONS_URL);
    };
    PublicatonsService.prototype.getPublicationById = function (id) {
        var imageByIdUrl = PUBLICATIONS_URL + ("/" + id);
        return this._requester
            .getJson(imageByIdUrl);
    };
    PublicatonsService.prototype.rateProduct = function (publicationId, rate) {
        var currentUser = this._localeStorageService.getUser().username;
        var infoAsString = "id=" + publicationId + "&username=" + currentUser + "&rate=" + rate;
        return this._requester
            .postAuthorized(RATE_PUBLICATION, infoAsString);
    };
    PublicatonsService.prototype.addComment = function (publicationId, comment) {
        var bodyObj = comment;
        bodyObj.id = publicationId;
        var body = this._requester.createBody(bodyObj);
        return this._requester.postAuthorized(PUBLICATION_COMMENT_URL, body);
    };
    PublicatonsService.prototype.addPublication = function (title, imageUrl) {
        var publication = {
            title: title,
            imageUrl: imageUrl
        }, body = this._requester.createBody(publication);
        return this._requester.postAuthorized(PUBLICATION_URL, body);
    };
    PublicatonsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [requester_service_1.RequesterService, local_storage_service_1.LocalStorageService])
    ], PublicatonsService);
    return PublicatonsService;
}());
exports.PublicatonsService = PublicatonsService;
//# sourceMappingURL=publications.service.js.map