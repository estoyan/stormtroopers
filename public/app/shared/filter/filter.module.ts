import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterComponent } from './filter.component';

@NgModule({
    imports: [FormsModule],
    exports: [FilterComponent],
    declarations: [FilterComponent],
    providers: []
})

export class FilterModule { }
