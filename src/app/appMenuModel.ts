import {signal} from '@angular/core';

export interface AppMenuModel  {
  menuRoute:string,
  menuTitle:string,
  menuIcon?:string,
  isVisible?: boolean
  isEnabled?:boolean,
}

export class AppMenuFactory {

  private readonly menus = signal<AppMenuModel[]>(
    [
      {menuRoute: "quiz", menuTitle: "Quiz Page"},
      {menuRoute: "game", menuTitle: "The Number Game"},
      {menuRoute: "ng-features", menuTitle: "Angular Features"},
      {menuRoute: "todos", menuTitle: "My Task (todo)"},
      {menuRoute: "signal-form", menuTitle: "Signal Form Demo"},
    ]);
  getAppMenus = () => this.menus;
  createMenu (menu : AppMenuModel){
    this
  }


}
