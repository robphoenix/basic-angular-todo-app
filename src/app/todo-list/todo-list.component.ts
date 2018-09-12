import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';
import { TodosService } from './../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getTodos().subscribe(todos => (this.todos = todos));
  }

  add(item: string) {
    item = item.trim();
    if (!item) {
      return;
    }
    this.todosService.addTodo({ item } as ITodo).subscribe(todo => {
      if (todo) {
        this.todos.push(todo);
      }
    });
  }

  delete(todo: ITodo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.todosService.deleteTodo(todo).subscribe();
  }

  toggleDone(todo: ITodo) {
    const done: boolean = !todo.done;
    this.todos.forEach(t => {
      if (t === todo) {
        t.done = done;
      }
    });
    todo.done = done;
    this.todosService.updateTodo(todo).subscribe();
  }
}
