import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterSortComponent } from './filterSortComponent';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FilterSortComponent],
  declarations: [FilterSortComponent],
  providers: []
})
export class FilterTextModule { }
