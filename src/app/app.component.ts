import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { ProductsListComponent } from '../pages/products-list.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    HeaderComponent,
    ProductsListComponent,
  ],
  template: `
    <app-header />
    <app-products-list />
    <!-- <router-outlet /> -->
  `,
  styles: [],
})
export class AppComponent {}
