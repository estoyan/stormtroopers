import { Component, OnInit, Input } from '@angular/core';
import { PublicatonsService } from '../../services/publications/publications.service';
import { ProductsService } from '../../services/products/products.service';
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
    private _productService: ProductsService
  ) { }

  ngOnInit() {
    this._productService.getRecentProducts()
      .subscribe(x => this.recentProducts = x)

    this._publicatonsService.getTopImages()
      .subscribe(x => this.topPublications = x)
  }

  setNewRate(event: any, publicationId: string) {
    let currentUser = JSON.parse(window.localStorage.getItem('user')).username;
    let rate = event;
    let id = publicationId;
    this._publicatonsService.rateProduct(id, currentUser, rate);
    console.log(currentUser, rate, id);
  }
}