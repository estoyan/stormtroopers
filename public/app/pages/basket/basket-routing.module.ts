import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketComponent } from './basket.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { BasketProceedComponent } from './basket-proceed/basket-proceed.component';

const routes: Routes = [
    {
        path: '',
        component: BasketComponent,
        children: [
            {
                path: '',
                component: BasketListComponent
            },
            {
                path: 'proceed',
                component: BasketProceedComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BasketRoutingModule { }

export const routedComponents = [
    BasketComponent,
    BasketProceedComponent,
    BasketListComponent
];
