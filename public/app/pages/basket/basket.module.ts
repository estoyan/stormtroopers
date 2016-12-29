import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BasketRoutingModule, routedComponents } from './basket-routing.module';

import { ProductsService } from '../../services/products/products.service';

@NgModule({
    imports: [BasketRoutingModule, SharedModule],
    declarations: [routedComponents],
    providers: [ProductsService]
})

export class BasketModule { }