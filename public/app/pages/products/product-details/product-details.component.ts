// import { Component } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
//my implementataion above!

import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ProductsService } from '../../../services/products/products.service'
import {Product } from '../../../models/product.model'
// import { slideInDownAnimation } from '../animations';

// import { Hero, HeroService }  from './hero.service';


@Component({
  moduleId: module.id,
  templateUrl: './product-details.component.html',
  styleUrls:['./product-details.componenet.css']

})


export class ProductDetailsComponent implements OnInit {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _productService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this._productService.getProductById(params['id']))
       .subscribe((p: Product) => this.product = p);
    // .switchMap((params: Params) => this.service.getMovie(params['title']))
    //         .subscribe((m: Movie) => this.movie = m);
  }

}



