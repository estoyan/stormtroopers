import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { ToastService } from '../../../services/shared/toast.service';

import { Order } from '../../../models/order.model';

const ON_DELIVERY = 'On Delivery';

@Component({
    moduleId: module.id,
    templateUrl: './basket-proceed.component.html',
    styleUrls: ['./basket-proceed.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(300)
            ])
        ])
    ]
})

export class BasketProceedComponent implements OnInit {
    formModel: any = {};
    paymentSelection: string;
    paymentOptions: string[];
    orders: Order[] = [];

    constructor(
        private _userService: UserService,
        private _router: Router
    ) {
        this.paymentOptions = [ON_DELIVERY];
    }

    ngOnInit() {
        this._userService.getCurrentUser()
            .subscribe(user => this.formModel = user);

        this._userService.getUserProceedingOrders()
            .subscribe(orders => {
                this.orders = orders;
            });
    }

    onSubmit() {
        let deliveryDetails = {
            firstname: this.formModel.firstname,
            lastname: this.formModel.lastname,
            phoneNumber: this.formModel.phoneNumber,
            address: this.formModel.address,
            paymentMethod: this.formModel.paymentMethod,
        };

        this._userService.payUserProceedingOrders(this.orders, deliveryDetails)
            .subscribe(_ => {
                this._router.navigate(['/home']);
            });
    }
}
