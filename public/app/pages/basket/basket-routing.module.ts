import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../guards/authGuard';

import { BasketComponent } from './basket.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { BasketBuyComponent } from './basket-buy/basket-buy.component';

const routes: Routes = [
    {
        path: '',
        component: BasketComponent,
        children: [
            {
                path: '',
                component: BasketListComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'buy',
                component: BasketBuyComponent,
                canActivate: [AuthGuard]
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
    BasketBuyComponent,
    BasketListComponent
];