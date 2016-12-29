import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../services/products/products.service';
import { Product } from '../../../models/product.model';

@Component({
    moduleId: module.id,
    templateUrl: './basket-list.component.html'
})

export class BasketListComponent implements OnInit {
    products: Product[];

    constructor(private _productsService: ProductsService) { }

    ngOnInit() {
        this._productsService.getProductsFromBasket()
            .subscribe(x => this.products = x);
    }
}