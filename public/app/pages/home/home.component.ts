import { Component, OnInit, Input } from '@angular/core';
import { PublicatonsService } from '../../services/publications/publications.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fullPath: string = 'static/app/assets/imgs/rougeone.png'

  private topImages: any[];
  private recentProducts: any[];

  totalRating: number;
  constructor(
    private publicatonsService: PublicatonsService,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getRecentProducts()
      .subscribe(x => this.recentProducts = x)

    this.publicatonsService.getTopImages()
      .subscribe(x => this.topImages = x)
  }

  setNewRate(event: any) {
    console.log('new Rate is: ', event);
  }
}