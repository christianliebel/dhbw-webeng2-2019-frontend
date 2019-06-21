import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  create(todo: Todo): Todo {
    return new Todo('foo');
  }

  get(todoId: number): Todo {
    return new Todo('foo');
  }

  getAll(): Todo[] {
    return [
      new Todo('Wäsche waschen'),
      new Todo('Auto waschen'),
    ];
  }

  update(todo: Todo): void {
  }

  delete(todoId: number): void {
  }
}
