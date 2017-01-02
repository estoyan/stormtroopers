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
var user_component_1 = require('./user.component');
var user_profile_component_1 = require('./user-profile/user-profile.component');
var update_profile_component_1 = require('./update-profile/update-profile.component');
var user_publications_component_1 = require('./user-publications/user-publications.component');
var past_orders_component_1 = require('./past-orders/past-orders.component');
var routes = [
    {
        path: '',
        component: user_component_1.UserComponent,
        children: [
            {
                path: '',
                component: user_profile_component_1.UserProfileComponent
            },
            {
                path: 'update',
                component: update_profile_component_1.UpdateProfileComponent,
            },
            {
                path: 'publications',
                component: user_publications_component_1.UserPublicationsComponent,
            },
            {
                path: 'pastorders',
                component: past_orders_component_1.PastOrdersComponent,
            },
        ]
    },
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], UserRoutingModule);
    return UserRoutingModule;
}());
exports.UserRoutingModule = UserRoutingModule;
exports.routedComponents = [
    user_profile_component_1.UserProfileComponent,
    user_component_1.UserComponent,
    update_profile_component_1.UpdateProfileComponent,
    user_publications_component_1.UserPublicationsComponent,
    past_orders_component_1.PastOrdersComponent
];
//# sourceMappingURL=user-routing.module.js.map