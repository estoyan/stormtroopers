import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../../../services/shared/toast.service';
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
        private _router: Router,
        private _toastService: ToastService
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
            },
            err => this._toastService.activate(err, false));

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
        let selectedOrders = this.getSelectedOrders();

        if (this.removeSelection === SELECTED) {
            if (selectedOrders.length === 0) {
                this._toastService.activate('Please select orders', false);
                return;
            }

            this.removeSelectedOrders(selectedOrders);
        } else if (this.removeSelection === ALL) {
            this.removeAllOrders();
        }
    }

    onProceed() {
        let selectedOrders: Order[] = this.getSelectedOrders();
        if (selectedOrders.length === 0) {
            this._toastService.activate('Please select orders', false);
            return;
        }

        this._userService.proceedUserOrders(selectedOrders)
            .subscribe(_ => {
                this._router.navigate(['/basket/proceed']);
            },
            err => this._toastService.activate(err, false));
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

    private removeSelectedOrders(selectedOrders: Order[]) {
        this._userService.removeUserOrdersFromBasket(selectedOrders)
            .subscribe(_ => {
                let newOrders: Order[] = [];
                for (let i = 0; i < this.orders.length; i += 1) {
                    if (!this.selections[i].isSelected) {
                        newOrders.push(this.orders[i]);
                    }
                }

                this.orders = newOrders;
                this._toastService.activate('Successfully removed from basket', true);
            },
            err => this._toastService.activate(err, false));
    }

    private removeAllOrders() {
        this._userService.removeUserOrdersFromBasket(this.orders)
            .subscribe(_ => {
                this.orders = [];
                this._toastService.activate('Successfully removed from basket', true);
            },
            err => this._toastService.activate(err, false));
    }
}
