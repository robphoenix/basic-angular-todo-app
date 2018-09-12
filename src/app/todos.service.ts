import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ITodo } from './todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todosUrl = 'api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosUrl).pipe(
      tap((_) => this.log('fetched todos')),
      catchError(this.handleError('getTodos', [])),
    );
  }

  addTodo(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>(this.todosUrl, todo, httpOptions).pipe(
      tap((item: ITodo) => this.log(`added todo w/ id=${item.id}`)),
      catchError(this.handleError<ITodo>('addTodo')),
    );
  }

  deleteTodo(todo: ITodo): Observable<ITodo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<ITodo>(url, httpOptions).pipe(
      tap((_) => this.log(`deleted todo id=${todo.id}`)),
      catchError(this.handleError<ITodo>('deleteTodo')),
    );
  }

  updateTodo(todo: ITodo): Observable<ITodo> {
    return this.http.put(this.todosUrl, todo, httpOptions).pipe(
      tap((_) => this.log(`updated todo id=${todo.id}`)),
      catchError(this.handleError<any>('updateTodo')),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`TODOS Service: ${message}`);
  }
}
