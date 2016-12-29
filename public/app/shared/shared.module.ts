import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { PublicationListComponent } from './publication-list/publication-list.component';
import { FilterSortModule } from './filterSort/filterSortModule';

import { ProductOverviewComponent } from './product-overview/product-overview.component';

import { AcStar } from './stars/star';
import { AcStars } from './stars/stars';

import { SumPipe } from '../pipes/sum.pipe';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        PublicationListComponent,
        AcStar,
        AcStars,
        SumPipe,
        FilterSortModule,
        ProductOverviewComponent
    ],
    declarations: [AcStar, AcStars, PublicationListComponent, SumPipe, ProductOverviewComponent]
})
export class SharedModule { }
