import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  private url: string = 'https://jsonplaceholder.typicode.com/todos';


  getTodoList(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      catchError(this.handleError)
    )
  }

  updatedTodo(data: any): Observable<any> {
    if (data.id > 10 && data.id < 15) {
      return this.http.put('https://jsonplacehollder.typicode.com/todos/' + data.id, data).pipe(
        catchError(this.handleError)
      )
    }
    else {
      return this.http.put('https://jsonplaceholder.typicode.com/todos/' + data.id, data).pipe(
        catchError(this.handleError)
      )
    }
  }

  deleteTodo(data: any) {
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/' + data.id, data).pipe(
      catchError(this.handleError)
    )
  }

  addNewTodo(newTodo:any){
    return this.http.post('https://jsonplaceholder.typicode.com/todos/', newTodo).pipe(
      catchError(this.handleError)
    )
  }


  handleError(e: any): any {
    let errorMsg = '';

    if (e.error instanceof ErrorEvent) {
      // client-side error
      errorMsg = 'Error: ' + e.error.message;
    } else {
      // server-side error
      errorMsg = 'Error Code: ' + e.status + '\nMessage: ' + e.message;
    }

    return throwError(() => errorMsg);
  }
}
