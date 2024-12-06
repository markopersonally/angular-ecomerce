import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from './primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md">
    <span>{{ title() }}</span>
    <app-primary-button />
  </div>`,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Angular Ecomerce');
}
