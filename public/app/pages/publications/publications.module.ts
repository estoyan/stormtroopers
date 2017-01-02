import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule, routedComponents } from './publications-routing.module';
import { PublicationsOverviewModule } from '../../shared/publication-overview/publications-overview.module';
import { PipeModule } from '../../pipes/pipe.module';
import { StarsModule } from '../../shared/stars/stars.module';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';


import { PublicatonsService } from '../../services/publications/publications.service';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PublicationsRoutingModule,
        PublicationsOverviewModule,
        PipeModule,
        StarsModule,
        PaginationModule.forRoot()
    ],
    declarations: [routedComponents],
    providers: [PublicatonsService]
})

export class PublicationsModule { }
