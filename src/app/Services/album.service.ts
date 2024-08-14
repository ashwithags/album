import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public filterPhotoData = "";

  constructor(
    private http: HttpClient
  ) { }


  fetchAlbumDetails(): Observable<any> {

    return this.http.get('https://jsonplaceholder.typicode.com/albums').pipe(
      catchError(this.handleError)
    )

  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.status
    }
    return throwError(errorMessage);
  }


  getAllPhotos(id:any): Observable<any> {

    return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(

      map((photots:any)=>{
        if(id== 'all'){
          return photots;
        }
        else{
          return photots.filter((photo:any)=> photo.albumId == id)
        }
      }),
      catchError(this.handleError)
    )
  }

  getPhotoFilterData(data: any) {

    this.filterPhotoData = data; //setting album id using service
   
  }


}
