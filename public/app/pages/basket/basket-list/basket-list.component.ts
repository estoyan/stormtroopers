import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../models/product.model';

const SELECTION_COUNT = 12;

@Component({
    moduleId: module.id,
    templateUrl: './basket-list.component.html',
    styleUrls: ['./basket-list.component.css']
})

export class BasketListComponent implements OnInit {
    orders: Product[];
    selectionQuantities: any[] = [];
    options: number[] = [];
    totals: number[] = [];

    constructor(private _productsService: ProductsService) { }

    ngOnInit() {
        this._productsService.getProductsFromBasket()
            .subscribe(orders => {
                this.orders = orders;
                orders.forEach(o => {
                    this.selectionQuantities.push({
                        isSelected: true,
                        quantity: 1
                    });

                    this.totals.push(o.price);
                });
            });

        for (let i = 1; i <= SELECTION_COUNT; i += 1) {
            this.options.push(i);
        }
    }

    onProductSelect(index: number) {
        this.selectionQuantities[index].isSelected = !this.selectionQuantities[index].isSelected;
    }

    onPriceSelect(value: number, index: number) {
        this.selectionQuantities[index].quantity = value;
        this.totals[index] = value * this.orders[index].price;
    }

    sumTotal(): number {
        let sum = 0;
        for (let i=0; i < this.totals.length; i += 1) {
            if (this.selectionQuantities[i].isSelected) {
                sum += this.totals[i];
            }
        }

        return sum;
    }
}