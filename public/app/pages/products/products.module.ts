import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule, routedComponents } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component'

@NgModule({
  imports: [SharedModule, ProductsRoutingModule],
  declarations: [
    routedComponents,
    ProductDetailsComponent,
  ],
  providers: []
})
export class ProductsModule { }
