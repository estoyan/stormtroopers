import { NgModule } from '@angular/core';

import { PublicationsOverviewModule } from './publication-overview/publications-overview.module';
import { ProductOverviewModule } from './product-overview/product-overview.module';
import { StarsModule } from './stars/stars.module';
import { FilterModule } from './filter/filter.module';
import { SortModule } from './sort/sort.module';

@NgModule({
    imports: [
        FilterModule,
        SortModule,
        StarsModule,
        ProductOverviewModule,
        PublicationsOverviewModule
        ],
    exports: [
        FilterModule,
        SortModule,
        StarsModule,
        ProductOverviewModule,
        PublicationsOverviewModule
    ],
    declarations: []
})
export class SharedModule { }
