import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button (click)="handleButtonCLick()">
    {{ label() }}
  </button>`,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');

  handleButtonCLick() {
    console.log('Button clicked');
  }
}
