import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  public todo: any;

  @Output()
  public done = new EventEmitter<any>();


  constructor(elementRef: ElementRef) {
    console.log(elementRef);
  }

  ngOnInit() {
  }

  onClick() {
    this.done.emit(this.todo);
  }

  @HostBinding('class.foo')
  doneState = false;

  @HostListener('click')
  onTodoClick() {
    this.doneState = !this.doneState;
  }
}
