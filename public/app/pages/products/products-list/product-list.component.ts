import { Component,OnInit,ViewChild } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products/products.service';
import { FilterTextComponent} from '../../../shared/filter-text/filter-text.component';
import { FilterTextService} from '../../../shared/filter-text/filter-text.service';
@Component({

  moduleId: module.id,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.componenet.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts = this.products;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;
  isLogedIn = false;
  constructor(private _productService: ProductsService,  private _filterService: FilterTextService) { }

  filterChanged(searchText: string) {
    this.filteredProducts = this._filterService.filter(searchText, ['name','description'], this.products);
    console.log(this.filteredProducts)
  }
  
  ngOnInit() {
    this._productService.getAllProducts()
      .subscribe(x => this.products =this.filteredProducts= x);
  }

}