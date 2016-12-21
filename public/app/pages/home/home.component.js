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
var gallery_service_1 = require('../../services/gallery/gallery.service');
var HomeComponent = (function () {
    function HomeComponent(galleryService) {
        this.galleryService = galleryService;
        // private fullPath: string = 'http://cdn.wallpapersafari.com/0/6/73bG4e.jpg';
        this.fullPath = 'static/app/assets/imgs/rougeone.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryService.getTopImages()
            .subscribe(function (x) { return _this.topImages = x; });
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [gallery_service_1.GalleryService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map