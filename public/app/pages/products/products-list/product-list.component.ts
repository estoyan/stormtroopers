import { Component,OnInit,ViewChild } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products/products.service';
import {FilterSortComponent } from '../../../shared/filterSort/filterSortComponent';
@Component({

  moduleId: module.id,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.componenet.css']
})

export class ProductListComponent implements OnInit {
  sortCriteria: string;
  products: Product[] = [];
  filterProp: Array<string>;
  searchText: String;
  isLogedIn = false;
  sortProp:Array<Object>;
  constructor(private _productService: ProductsService) { 
    this.sortCriteria ='category';
    this.filterProp = ['name', 'description'];
    this.sortProp = [
      {
        queryParam: 'price true',
        displayValue: 'Price: Low to High'
      },
      {
        queryParam: 'price false',
        displayValue: 'Price: High to Low'
      } ,
      {
        queryParam: 'name',
        displayValue: 'Product Name'
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
  
  ngOnInit() {
    this._productService.getAllProducts()
      .subscribe(x => this.products = x);
  }

}