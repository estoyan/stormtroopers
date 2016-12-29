import { Component, Input, Output } from '@angular/core'
import { Product } from '../../models/product.model';

@Component({
  selector: 'product-overview',
  moduleId: module.id,
  templateUrl: './product-overview.component.html'
})
export class ProductOverviewComponent {
  @Input() product: Product;

  constructor() { }
}