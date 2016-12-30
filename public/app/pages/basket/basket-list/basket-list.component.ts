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

    constructor(private _productsService: ProductsService) { }

    ngOnInit() {
        this._productsService.getProductsFromBasket()
            .subscribe(orders => {
                this.orders = orders;
                orders.forEach(o => {
                    this.selectionQuantities.push({
                        isSelected: true,
                        quantity: 1
                    })
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
    }
}