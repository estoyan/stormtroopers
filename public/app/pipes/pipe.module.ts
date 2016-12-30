import { NgModule } from '@angular/core';

import { CustomFilterPipe } from './filter.pipe'
import { CustomSortPipe } from './sort.pipe'
import { SumPipe } from './sum.pipe'

@NgModule({
    imports: [],
    declarations: [CustomFilterPipe, CustomSortPipe, SumPipe],
    exports: [CustomFilterPipe, CustomSortPipe, SumPipe]
})

export class PipeModule { }