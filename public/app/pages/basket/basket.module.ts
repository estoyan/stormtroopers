import { NgModule } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { BasketRoutingModule, routedComponents } from './basket-routing.module';

import { ProductsService } from '../../services/products/products.service';

@NgModule({
    imports: [BasketRoutingModule, SharedModule, DropdownModule.forRoot()],
    declarations: [routedComponents],
    providers: [ProductsService]
})

export class BasketModule { }