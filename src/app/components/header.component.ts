import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center font-bold">
    <span class="text-xl">{{ title() }}</span>
    <app-primary-button [label]="cart()" (btnClicked)="showButtonClicked()"/>
  </div>`,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Angular Ecomerce');

  cart = signal("Cart");
  showButtonClicked(){
    console.log("clicked")
  }
}
