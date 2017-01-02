import { NgModule } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { BasketRoutingModule, routedComponents } from './basket-routing.module';

import { StickFirstChildDirective } from '../../directives/stick-first-child.directive';

import { ProductsService } from '../../services/products/products.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BasketRoutingModule,
        SharedModule,
        DropdownModule.forRoot()
    ],
    declarations: [
        routedComponents,
        StickFirstChildDirective
    ],
    providers: [ProductsService]
})

export class BasketModule { }
