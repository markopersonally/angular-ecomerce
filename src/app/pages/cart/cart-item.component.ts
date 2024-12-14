import { Component, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ButtonComponent } from "../../components/button.component";

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div
      class="bg-white shadow-xl border rounded-xl p-6 flex gap-4 items-center"
    >
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm">{{ '$' + item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <app-button label="Delete"/>
    </div>
  `,
  styles: ``,
})
export class CartItemComponent {
  item = input.required<Product>();
}
