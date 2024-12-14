import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: ``,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();
}
