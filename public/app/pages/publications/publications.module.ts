import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PublicationsRoutingModule, routedComponents } from './publications-routing.module';

import { PublicatonsService } from '../../services/publications/publications.service';

@NgModule({
    imports: [PublicationsRoutingModule, SharedModule],
    declarations: [routedComponents],
    providers: [PublicatonsService]
})

export class PublicationsModule { }