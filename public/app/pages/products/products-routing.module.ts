import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component'
import { ProductListComponent } from './products-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            {
                path: '',
                component: ProductListComponent
            }
            ,
            {
                path: ':id',
                component: ProductDetailsComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule { }

export const routedComponents = [ProductsComponent, ProductListComponent];