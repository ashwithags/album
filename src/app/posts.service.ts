import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient ) { }

  fetchPostsAll():Observable<any>{

    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(
      catchError(()=>'Error')
    )

  }


  fetchPostOnId(id:any):Observable<any>{

    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id).pipe(
      catchError(this.HandleError)
    )
  }


  fetchComments(id:any):Observable<any>{

    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').pipe(
      catchError(this.HandleError)
    )

  }

  HandleError(e:any){
    let errorMes = "";

    if(e.status == 404){
      errorMes = "URL not Found";
    }
    else {
      errorMes = "Unknow error";
    }
    return throwError(()=> errorMes)
  }

}
