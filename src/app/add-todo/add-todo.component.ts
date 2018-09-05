import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  constructor() {}

  @Output()
  add: EventEmitter<string> = new EventEmitter<string>();

  addTodo(item: string) {
    this.add.emit(item);
  }

  ngOnInit() {}
}
