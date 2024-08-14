import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  checkLoggenInUser(data:any):Observable<any>{
    return this.http.post<any>('https://dummyjson.com/auth/login',data).pipe(
      catchError(this.handleError)
    )
  }


  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }


  logout(){
    localStorage.removeItem('token');
  }

  handleError(e:any){
    let errorMessage:any;
    if(e.name=="HttpErrorResponse"){
      errorMessage = e.error.message;
    }
    else{
      errorMessage = 'Unknown Error';
    }
    return throwError(()=> errorMessage);
  }
}
