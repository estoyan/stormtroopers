import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SortComponent } from './sort.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [SortComponent],
    declarations: [SortComponent],
    providers: []
})

export class SortModule { }
