import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BasketRoutingModule, routedComponents } from './basket-routing.module';

import { ProductsService } from '../../services/products/products.service';

@NgModule({
    imports: [CommonModule, FormsModule, BasketRoutingModule, SharedModule],
    declarations: [routedComponents],
    providers: [ProductsService]
})

export class BasketModule { }