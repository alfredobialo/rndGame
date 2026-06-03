import { Routes } from '@angular/router';
import {GamePage} from '../pages/game-page';
import {NgFeaturePage} from '../pages/ng-feature-page';
import {TodoPage} from '../pages/todo-page';
import {SignalFormPage} from '../pages/signal-form-page';

export const routes: Routes = [
  {
    path: 'game',
    component: GamePage,
  },
  {
    path: 'ng-features',
    component : NgFeaturePage
  },
  {
    path: 'todos',
    component : TodoPage,
  },
  {
    path: 'signal-form',
    component : SignalFormPage,
  },
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  }
];
