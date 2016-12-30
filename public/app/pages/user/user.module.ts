import { NgModule } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {PublicationsOverviewModule} from '../../shared/publication-overview/publications-overview.module';
import {ProductOverviewModule} from '../../shared/product-overview/product-overview.module';
// import { SharedModule } from '../../shared/shared.module';
import {StarsModule } from '../../shared/stars/stars.module';
import { routedComponents } from './user-routing.module';

@NgModule({
    imports: [UserRoutingModule,FormsModule, CommonModule, StarsModule, PublicationsOverviewModule, ProductOverviewModule],
    declarations: [routedComponents],
    providers: [Ng2BootstrapModule]
})

export class UserModule { }