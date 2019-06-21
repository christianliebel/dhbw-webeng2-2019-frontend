import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APP_NAME } from './appName';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'todoFoo';
  value = 'Hello!';
  color = 'hotpink';
  pi = 3.14159265;
  myTodo = {name: 'Wäsche waschen', id: 5, done: false};
  myTodo2 = {name: 'Teller waschen', id: 6, done: false};
  show: boolean;
  todos: Todo[];
  private subscription: Subscription;

  constructor(
    @Inject(APP_NAME) name: string,
    public todo: TodoService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.todo.getAll().subscribe(todos => this.todos = todos);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClick({clientX, clientY}: MouseEvent) {
    alert(`${clientX} x ${clientY}`);
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
