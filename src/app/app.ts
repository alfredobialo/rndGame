import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AppMenuModel} from './appMenuModel';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <div class="bg-amber-50 h-full flex justify-center items-center">

      <div class="border-r-rose-800 border-r-2 min-h-[300px] px-6 py-4">
        @for(m of menus(); track m.menuRoute){
          <a [routerLink]="m.menuRoute" routerLinkActive="text-white bg-rose-700" class="duration-300 px-4 py-2 block mb-2 bg-rose-200 ring-rose-300 ring-2 rounded-lg">
            {{ m.menuTitle }}</a>
        }
j
      </div>
      <div class="flex-1 xl:px-8 xl:py-4">
        <router-outlet></router-outlet>

      </div>

    </div>


  `,
  styles: ``
})
export class App  {
  protected menus = signal<AppMenuModel[]>(
    [
      {menuRoute:"quiz", menuTitle:"Quiz Page"},
      {menuRoute : "game", menuTitle:"The Number Game"},
      {menuRoute : "ng-features", menuTitle:"Angular Features"},
      {menuRoute : "todos", menuTitle:"My Task (todo)"},
      {menuRoute : "signal-form", menuTitle:"Signal Form Demo"},
    ]);
}




