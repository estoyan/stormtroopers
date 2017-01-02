import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user/user.service';
import { ToastService } from '../../../services/shared/toast.service';
import { Product } from '../../../models/product.model';

@Component({
    moduleId: module.id,
    templateUrl: './past-orders.component.html',
    styleUrls: ['./past-orders.component.css']
})

export class PastOrdersComponent implements OnInit {
    pastOrders: Product[];

    constructor(private _userService: UserService,
        private _toastService: ToastService) {
    }

    ngOnInit() {
        this._userService.getPastOrders()
            .subscribe((products: Product[]) => this.pastOrders = products,
            err => this._toastService.activate(err, false));
    }
}
