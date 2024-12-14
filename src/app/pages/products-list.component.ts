import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './products-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 2,
      title: 'Smartwatch',
      image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f',
      price: 149.99,
      stock: 15,
    },
    {
      id: 3,
      title: 'Laptop',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      price: 999.99,
      stock: 10,
    },
    {
      id: 4,
      title: 'Digital Camera',
      image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def',
      price: 599.99,
      stock: 8,
    },
    {
      id: 5,
      title: 'Gaming Console',
      image: 'https://images.unsplash.com/photo-1593642532871-8b12e02d091c',
      price: 299.99,
      stock: 12,
    },
    {
      id: 6,
      title: 'Bluetooth Speaker',
      image: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      price: 49.99,
      stock: 30,
    },
    {
      id: 9,
      title: 'External Hard Drive',
      image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6',
      price: 79.99,
      stock: 40,
    },
    {
      id: 11,
      title: 'Tablet',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
      price: 399.99,
      stock: 22,
    },
  ]);
}
