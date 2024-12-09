import { Component, input } from '@angular/core';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  template: `
    <div
      class="bh-white shadow-lg border rounded-xl p-10 flex flex-col justify-center items-center relative"
    >
      {{ product().title }}
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
}
