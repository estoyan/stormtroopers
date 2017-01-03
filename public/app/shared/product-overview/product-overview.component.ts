import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'st-product-overview',
  moduleId: module.id,
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent {
  @Input() product: Product;
  @Output() addToBascketEvent = new EventEmitter()

  constructor() { }

  onAddToBasket(data: any) {
    this.addToBascketEvent.emit(data);
  }
}
