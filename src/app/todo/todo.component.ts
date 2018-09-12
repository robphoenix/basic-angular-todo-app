import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input()
  todo: ITodo;
  constructor() {}

  @Output()
  delete: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  @Output()
  done: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  deleteTodo() {
    this.delete.emit(this.todo);
  }

  toggleDone() {
    this.done.emit(this.todo);
  }

  ngOnInit() {}
}
