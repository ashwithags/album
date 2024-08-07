import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError} from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient
  ) { }

  fetchUserDetails(id:any):Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
     
      map(users => {
        if (id != undefined) {
          return users.filter((user: any) => user.id == id);
        } else {
          return users;
        }
      }),
      catchError(this.HandleError)
    )
  }



  HandleError(e:any){
    let ErrorMsg = '';
    if(e.status == 404){
      ErrorMsg = 'Not Found';
    }
    else{
      ErrorMsg = 'Unknown error';
    }
    return ErrorMsg;
  }


}
