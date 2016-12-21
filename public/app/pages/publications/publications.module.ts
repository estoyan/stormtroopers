import { NgModule } from '@angular/core';

import { PublicationsRoutingModule, routedComponents } from './publications-routing.module'

@NgModule({
    imports: [PublicationsRoutingModule],
    declarations: [routedComponents]
})

export class PublicationsModule { }