import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ProductOverviewComponent } from './product-overview.component';
import { ProductDetailsModalComponent } from '../product-details/product-details-modal.component';


@NgModule({
    imports: [RouterModule, CommonModule, ModalModule.forRoot()],
    exports: [ProductOverviewComponent],
    declarations: [ProductOverviewComponent, ProductDetailsModalComponent]
})

export class ProductOverviewModule { }
