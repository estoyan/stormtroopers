import { NgModule } from '@angular/core';

import { CustomFilterPipe } from './filter.pipe';
import { CustomSortPipe } from './sort.pipe';
import { SumPipe } from './sum.pipe';
import { LengthPipe } from './length.pipe';

@NgModule({
    imports: [],
    declarations: [CustomFilterPipe, CustomSortPipe, SumPipe, LengthPipe],
    exports: [CustomFilterPipe, CustomSortPipe, SumPipe, LengthPipe]
})

export class PipeModule { }
