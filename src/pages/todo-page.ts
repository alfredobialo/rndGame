import { Component } from '@angular/core';
import {TodoList} from '../todoApp/components/todo-list';

@Component({
  selector: 'gm-todo-page',
  imports: [
    TodoList
  ],
  template: ` <gm-todo-list /> `,
  styles: ``,
})
export class TodoPage {}
