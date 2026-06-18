import {Injectable, signal} from '@angular/core';

export interface AppMenuModel  {
  menuRoute:string,
  menuTitle:string,
  menuIcon?:string,
  isVisible?: boolean
  isEnabled?:boolean,
}

@Injectable({providedIn: 'root'})
export class AppMenuService {

  private  menus = signal<AppMenuModel[]>(
    [
      {menuRoute: "quiz", menuTitle: "Quiz Page"},
      {menuRoute: "game", menuTitle: "The Number Game"},
      {menuRoute: "ng-features", menuTitle: "Angular Features"},
      {menuRoute: "todos", menuTitle: "My Task (todo)"},
      {menuRoute: "signal-form", menuTitle: "Signal Form Demo"},
      {menuRoute: "ui", menuTitle: "Custom Components"},
    ]);
  getAppMenus = () => this.menus.asReadonly();
  createMenu (menu : AppMenuModel, menuIconClass:string = "", isVisible:boolean = true, isEnabled:boolean = true) {
    const mm:AppMenuModel = {...menu, menuIcon:menuIconClass, isVisible, isEnabled};
    this.menus.update( x => {
      return [...x , mm];
    });
  }


}
