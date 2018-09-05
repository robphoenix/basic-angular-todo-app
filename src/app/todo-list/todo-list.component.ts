import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import { TodosService } from './../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ITodo[];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getTodos().subscribe(todos => (this.todos = todos));
  }
}
