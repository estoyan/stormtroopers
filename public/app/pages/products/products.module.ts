import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule, routedComponents } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductOverviewComponent } from '../../shared/product-overview/product-overview.component'
import{FilterTextModule} from '../../shared/filterSort/filterSortModule'
import{CustomSortPipe} from '../../pipes/sort.pipe'
import{CustomFilterPipe} from '../../pipes/filter.pipe'



@NgModule({
  imports: [SharedModule,ProductsRoutingModule,FilterTextModule],
  declarations: [
    routedComponents,
    ProductDetailsComponent,
    ProductOverviewComponent,
    CustomSortPipe,
    CustomFilterPipe],
  providers: []
})
export class ProductsModule { }
