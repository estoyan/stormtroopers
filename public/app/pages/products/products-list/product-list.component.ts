import { Component, OnInit, ViewChild } from '@angular/core';

import { Product } from '../../../models/product.model';

import { ProductsService } from '../../../services/products/products.service';
import { AuthService } from '../../../services/authentication/auth.service';
import { ToastService } from '../../../services/shared/toast.service';

@Component({

  moduleId: module.id,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.componenet.css']
})

export class ProductListComponent implements OnInit {
  private basketUrl: string;
  sortCriteria: string;
  products: Product[] = [];
  filterProp: Array<string>;
  searchText: String;
  isLogedIn = false;
  sortProp: Array<Object>;
  constructor(private _productService:   ProductsService,
    private _authService: AuthService,
    private _toasterService: ToastService
  ) {
     

    this.sortCriteria = 'category';
    this.filterProp = ['title', 'description'];
    this.sortProp = [
      {
        queryParam: 'price true',
        displayValue: 'Price: Low to High'
      },
      {
        queryParam: 'price false',
        displayValue: 'Price: High to Low'
      },
      {
        queryParam: 'title',
        displayValue: 'Product Title'
      },
      // {
      //   queryParam: '',
      //   displayValue: 'Newest Arrivals'
      // }
      // TODO add property dateOfArrival


    ];
    this.searchText = '';
  }

  filterChanged(searchText: string) {
    this.searchText = searchText;
  }

  sortCollection(sortCriteria: string) {
    this.sortCriteria = sortCriteria;
  }

  addToBascket(event: any) {
    event[0].preventDefault();
    let product = event[1];
    this._productService.addProductToBasket(product)
      .subscribe(data => {
                this._toasterService.activate('Product was added to basket!', true)
            });
  }

  ngOnInit() {
    this._productService.getAllProducts()
      .subscribe(x => this.products = x);
    this.isLogedIn = this._authService.isLoggedIn();
  }

}