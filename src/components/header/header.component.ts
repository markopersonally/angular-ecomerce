import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `<div class="header">{{ title() }}</div>`,
  styles: `
  
    .header {
      background-color: gray;
      padding: 1rem;
      color: black;
    }

  `,
})
export class HeaderComponent {
  title = signal('Angular Ecomerce');
}
