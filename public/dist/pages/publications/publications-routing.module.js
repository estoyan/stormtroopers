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
var authGuard_1 = require('../../guards/authGuard');
var publications_component_1 = require('./publications.component');
var publication_list_page_component_1 = require('./publication-list/publication-list-page.component');
var publication_create_component_1 = require('./publication-create/publication-create.component');
var publication_detail_component_1 = require('./publication-detail/publication-detail.component');
var routes = [
    {
        path: '',
        component: publications_component_1.PublicationsComponent,
        children: [
            {
                path: '',
                component: publication_list_page_component_1.PublicationListPageComponent
            },
            {
                path: 'create',
                component: publication_create_component_1.PublicationCreateComponent,
                canActivate: [authGuard_1.AuthGuard]
            },
            {
                path: ':id',
                component: publication_detail_component_1.PublicationDetailComponent,
                canActivate: [authGuard_1.AuthGuard]
            }
        ]
    }
];
var PublicationsRoutingModule = (function () {
    function PublicationsRoutingModule() {
    }
    PublicationsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], PublicationsRoutingModule);
    return PublicationsRoutingModule;
}());
exports.PublicationsRoutingModule = PublicationsRoutingModule;
exports.routedComponents = [
    publications_component_1.PublicationsComponent,
    publication_list_page_component_1.PublicationListPageComponent,
    publication_create_component_1.PublicationCreateComponent,
    publication_detail_component_1.PublicationDetailComponent
];
//# sourceMappingURL=publications-routing.module.js.map