import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user/user.service';
import { Order } from '../../../models/order.model';

const SELECTION_COUNT = 12;
const SELECTED = 'Selected';
const ALL = 'All';

@Component({
    moduleId: module.id,
    templateUrl: './basket-list.component.html',
    styleUrls: ['./basket-list.component.css']
})

export class BasketListComponent implements OnInit {
    orders: Order[] = [];
    selections: any[] = [];
    quantityOptions: number[] = [];
    removeOptions: string[];
    removeSelection: string;

    constructor(
        private _userService: UserService,
        private _router: Router
    ) {
        this.removeOptions = [SELECTED, ALL];
    }

    ngOnInit() {
        this._userService.getUserOrdersFromBasket()
            .subscribe(orders => {
                this.orders = orders;
                orders.forEach(o => {
                    this.selections.push({
                        isSelected: true
                    });
                });
            });

        for (let i = 1; i <= SELECTION_COUNT; i += 1) {
            this.quantityOptions.push(i);
        }
    }

    onProductSelect(index: number) {
        this.selections[index].isSelected = !this.selections[index].isSelected;
    }

    onPriceSelect(value: number, index: number) {
        this.orders[index].quantity = value;
        this.orders[index].total = value * this.orders[index].product.price;
    }

    sumTotal(): number {
        let sum = 0;
        for (let i = 0; i < this.orders.length; i += 1) {
            if (this.selections[i].isSelected) {
                sum += this.orders[i].total;
            }
        }

        return sum;
    }

    onRemove() {
        if (this.removeSelection === SELECTED) {
            let ordersToRemove: Order[] = this.getSelectedOrders();
            this._userService.removeUserOrdersFromBasket(ordersToRemove)
                .subscribe(_ => {
                    let newOrders: Order[] = [];
                    for (let i = 0; i < this.orders.length; i += 1) {
                        if (!this.selections[i].isSelected) {
                            newOrders.push(this.orders[i]);
                        }
                    }

                    this.orders = newOrders;
                });
        } else if (this.removeSelection === ALL) {
            this._userService.removeUserOrdersFromBasket(this.orders)
                .subscribe(_ => {
                    this.orders = [];
                });
        }
    }

    onProceed() {
        let ordersToProceed: Order[] = this.getSelectedOrders();
        this._userService.proceedUserOrders(ordersToProceed)
            .subscribe(_ => this._router.navigate(['/basket/proceed']));
    }

    private getSelectedOrders(): Order[] {
        let selectedOrders: Order[] = [];
        for (let i = 0; i < this.orders.length; i += 1) {
            if (this.selections[i].isSelected) {
                selectedOrders.push(this.orders[i]);
            }
        }

        return selectedOrders;
    }
}
