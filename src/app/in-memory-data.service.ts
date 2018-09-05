import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITodo } from './todo';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos: ITodo[] = [
      { id: 1, item: 'Read Ralph Ellison\'s "The Invisible Man"' },
      { id: 2, item: 'Get the kids ready for school.' },
      { id: 3, item: 'Chop wood' },
      { id: 4, item: 'Grok Angular' }
    ];
    return { todos };
  }
}
