import { Component, OnInit } from '@angular/core';

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
  public sortCriteria: string;
  public products: Product[] = [];
  public filterProp: Array<string>;
  public searchText: String;
  public isLogedIn = false;
  public sortProp: Array<Object>;
  public totalPublications: number;
  public currentPage: number = 1;
  public maxSize: number = 10;
  public itemsPerPage: number = 10;
  public firstItemToShow: number;
  public lastItemToShow: number;
  constructor(private _productService: ProductsService,
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
      }
    ];
    this.searchText = '';
    this.firstItemToShow = 0;
    this.lastItemToShow = this.itemsPerPage;
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
        this._toasterService.activate('Product was added to basket!', true);
      },
      err => {
        this._toasterService.activate(err, false);
      });
  }
  public pageChanged(event: any): void {
    this.firstItemToShow = (event.page - 1) * this.itemsPerPage;
    this.lastItemToShow = this.firstItemToShow + this.itemsPerPage;
  }
  ngOnInit() {
    this._productService.getAllProducts()
      .subscribe(x => {
        this.totalPublications = x.length;
        this.products = x;
      },
      err => {
        this._toasterService.activate(err, false);
      });
    this.isLogedIn = this._authService.isLoggedIn();
  }

}
