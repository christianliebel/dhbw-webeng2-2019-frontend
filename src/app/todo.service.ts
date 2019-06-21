import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(public http: HttpClient) {}

  create(todo: Todo): Observable<Todo> {
    return this.http
      .post<Todo>('http://localhost:3000/todos', todo);
  }

  get(todoId: number): Observable<Todo> {
    return this.http
      .get<Todo>(`http://localhost:3000/todos/${todoId}`);
  }

  getAll(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('http://localhost:3000/todos');
  }

  update(todo: Todo): Observable<void> {
    return this.http
      .put<void>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  delete(todoId: number): Observable<void> {
    return this.http
      .delete<void>(`http://localhost:3000/todos/${todoId}`);
  }
}
