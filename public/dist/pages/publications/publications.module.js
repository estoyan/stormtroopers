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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var publications_routing_module_1 = require('./publications-routing.module');
var publications_overview_module_1 = require('../../shared/publication-overview/publications-overview.module');
var pipe_module_1 = require('../../pipes/pipe.module');
var stars_module_1 = require('../../shared/stars/stars.module');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var publications_service_1 = require('../../services/publications/publications.service');
var PublicationsModule = (function () {
    function PublicationsModule() {
    }
    PublicationsModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                publications_routing_module_1.PublicationsRoutingModule,
                publications_overview_module_1.PublicationsOverviewModule,
                pipe_module_1.PipeModule,
                stars_module_1.StarsModule,
                ng2_bootstrap_1.PaginationModule.forRoot()
            ],
            declarations: [publications_routing_module_1.routedComponents],
            providers: [publications_service_1.PublicatonsService]
        }), 
        __metadata('design:paramtypes', [])
    ], PublicationsModule);
    return PublicationsModule;
}());
exports.PublicationsModule = PublicationsModule;
//# sourceMappingURL=publications.module.js.map