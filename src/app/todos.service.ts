import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ITodo } from './todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todosUrl = 'api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosUrl).pipe(
      tap(_ => console.log('fetched todos')),
      catchError(this.handleError('getTodos', []))
    );
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.todosUrl, todo, httpOptions).pipe(
      tap((item: ITodo) =>
        console.log(`TODO Service: added todo w/ id=${item.id}`)
      ),
      catchError(this.handleError<ITodo>('addTodo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`TODO Service: ${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
