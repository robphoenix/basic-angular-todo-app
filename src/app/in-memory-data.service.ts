import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from './todo';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: ITodo[] = [
      { id: 1, item: 'Read Ralph Ellison\'s "The Invisible Man"', done: false },
      { id: 2, item: 'Get the kids ready for school.', done: false },
      { id: 3, item: 'Chop wood', done: false },
      { id: 4, item: 'Grok Angular', done: false }
    ];
    return { todos };
  }

  genId(todos: ITodo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}
