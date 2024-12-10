import { Component, input } from '@angular/core';
import { Product } from '../models/products.model';
import { PrimaryButtonComponent } from '../components/primary-button.component';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bh-white shadow-lg border rounded-xl p-10 flex flex-col justify-center items-center relative"
    >
      <img [src]="product().image" class="w-[200px] h-[100px]" />
      <h3>{{ product().title }}</h3>
      <h3>$ {{ product().price }}</h3>
      <h3>{{ product().stock }}</h3>
      <app-primary-button label="Add to cart" class="w-full" />
      <app-primary-button label="Buy now!" class="w-full" />
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
}
