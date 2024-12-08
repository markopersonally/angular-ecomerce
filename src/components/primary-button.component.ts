import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `<button
    class="bg-violet-600 text-white w-full border rounded px-5 py-2"
    (click)="btnClicked.emit()"
  >
    {{ label() }}
  </button>`,
  styles: ``,
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();
}
