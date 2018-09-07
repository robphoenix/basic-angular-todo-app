import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input()
  todos: ITodo[];

  constructor() {}

  @Output()
  add: EventEmitter<string> = new EventEmitter<string>();

  addTodo(item: string) {
    this.add.emit(item);
  }

  todosLeft(): number {
    return this.todos.filter(todo => !todo.done).length;
  }

  ngOnInit() {}
}
