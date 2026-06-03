import {Component, inject, OnInit, signal} from '@angular/core';
import {TodoService} from '../services/todoService';
import {TodoResponse} from '../model/todo.models';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'gm-todo-list',
  imports: [
    JsonPipe
  ],
  template: `

  <div class="p-5">
    <p>todo-list</p>
    @if(todos()){
      <pre>
      {{todos() | json}}
    </pre>
    }
    @else{
      <p>Loading Todos</p>
    }

  </div>`,
  styles: ``,
})
export class TodoList implements OnInit {

  todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  ngOnInit(): void {

  }

}
