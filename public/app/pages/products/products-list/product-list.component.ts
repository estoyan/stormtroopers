import { Component } from '@angular/core';
import { Product } from '../../../models/product.model'

import{ProductsService} from '../../../services/products/products.service'

@Component({

  moduleId: module.id,
  templateUrl: './product-list.component.html',
  styleUrls:['./product-list.componenet.css']
})

export class ProductListComponent {

   products: Product[] = [];

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getAllProducts()
      .subscribe(x => this.products = x);
  }

 }