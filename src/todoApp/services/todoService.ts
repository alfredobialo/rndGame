import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoResponse} from '../model/todo.models';
import {toSignal} from '@angular/core/rxjs-interop';

const todoApiUrl = "http://api.todos.effectivonline.com/todos";

@Injectable({providedIn: 'root'})
export class TodoService {
  private http = inject(HttpClient);

  getTodos(){
    return toSignal(this.http.get<TodoResponse>(todoApiUrl));
  }

}
