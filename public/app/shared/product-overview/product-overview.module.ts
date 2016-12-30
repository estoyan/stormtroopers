import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductOverviewComponent } from './product-overview.component';

@NgModule({
    imports: [RouterModule, CommonModule],
    exports: [ProductOverviewComponent],
    declarations: [ProductOverviewComponent]
})

export class ProductOverviewModule { }
