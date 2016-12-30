import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../pipes/pipe.module';

import { PublicationListComponent } from './publication-list/publication-list.component';
import { FilterSortModule } from './filterSort/filterSortModule';

import { ProductOverviewComponent } from './product-overview/product-overview.component';

import { AcStar } from './stars/star';
import { AcStars } from './stars/stars';


@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, PipeModule],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        FilterSortModule,
        PipeModule,
        AcStar,
        AcStars,
        PublicationListComponent,
        ProductOverviewComponent
    ],
    declarations: [AcStar, AcStars, PublicationListComponent, ProductOverviewComponent]
})
export class SharedModule { }
