import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumData:any[] = []; 


  constructor(
    private router: Router,
    private albumService:AlbumService
  ) { }

  ngOnInit(): void {
    this.fetchAlbum();
  }

  fetchAlbum(){

    this.albumService.fetchAlbumDetails().subscribe(
      (data)=>{
        console.log(data);
        this.albumData = data;
      },
      (error)=>{
        console.log(error);
      }
    )

  }

  viewPhotos(id:number){

    this.albumService.getPhotoFilterData(id);
    this.router.navigate(['/photos']);
    
  }

  ViewAllPhotos(){
    this.albumService.getPhotoFilterData("all");
    this.router.navigate(['/photos']);

    
  }

}
