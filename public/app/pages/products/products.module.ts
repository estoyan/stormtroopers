import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { FilterModule } from '../../shared/filter/filter.module';
import { SortModule } from '../../shared/sort/sort.module';
// import { PipeModule } from '../../pipes/pipe.module';


import { ProductsRoutingModule, routedComponents } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component'

@NgModule({
  imports: [FormsModule, CommonModule, ProductsRoutingModule, FilterModule, SortModule, SharedModule],
  declarations: [
    routedComponents,
    ProductDetailsComponent,
  ],
  providers: []
})
export class ProductsModule { }
