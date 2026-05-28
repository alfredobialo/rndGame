import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="bg-amber-100">
      <h1 class="text-2xl text-amber-700">The Game App</h1>
    </div>


  `,
  styles: ``
})
export class App {
  protected readonly title = signal('rndGame');
}
