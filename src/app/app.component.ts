import { Component, ElementRef, Inject } from '@angular/core';
import { APP_NAME } from './appName';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoFoo';
  value = 'Hello!';
  color = 'hotpink';
  pi = 3.14159265;
  myTodo = { name: 'Wäsche waschen', id: 5, done: false };
  myTodo2 = { name: 'Teller waschen', id: 6, done: false };
  show: boolean;
  todos: Todo[];

  constructor(
      @Inject(APP_NAME) name: string,
      todo: TodoService
    ) {
    this.todos = todo.getAll();
  }

  onClick({ clientX, clientY }: MouseEvent) {
    alert(`${ clientX } x ${clientY}`);
  }

  onMouseMove(event: MouseEvent) {
    const rndR = Math.round(Math.random() * 255);
    const rndG = Math.round(Math.random() * 255);
    const rndB = Math.round(Math.random() * 255);
    this.color = `rgb(${rndR}, ${rndG}, ${rndB})`;
  }

  onDone(event: any) {
    console.log(event);
  }

  toggle() {
    this.show = !this.show;
  }
}
