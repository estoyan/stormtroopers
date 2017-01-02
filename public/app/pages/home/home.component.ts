import { Component, OnInit } from '@angular/core';
import { PublicatonsService } from '../../services/publications/publications.service';
import { ProductsService } from '../../services/products/products.service';
import { ToastService } from '../../services/shared/toast.service';
import { Product } from '../../models/product.model';
import { Publication } from '../../models/publication.model';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullPath: string = 'static/app/assets/imgs/rougeone.png'

  private topPublications: Publication[];
  private recentProducts: Product[];

  totalRating: number;
  constructor(
    private _publicatonsService: PublicatonsService,
    private _productService: ProductsService,
    private _toaster: ToastService
  ) { }

  ngOnInit() {
    this._productService.getRecentProducts()
      .subscribe(x => this.recentProducts = x,
      err => this._toaster.activate(err, false));

    this._publicatonsService.getTopPublications()
      .subscribe(x => this.topPublications = x,
      err => this._toaster.activate(err, false));
  }
}
