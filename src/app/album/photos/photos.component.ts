import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';
import { AlbumService } from 'src/app/Services/album.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photos: any[] = [];
  filteredArray: any[] = [];
  isLoading:boolean = true;

  totalItems = 100;
  pageSize = 10;
  currentPage = 0;
  photoSelect:any ;


  constructor(private albumSer: AlbumService) { }

  ngOnInit(): void {

    console.log(this.albumSer.filterPhotoData);
    this.fetchAllPhotos(this.albumSer.filterPhotoData);
    
  }

  fetchAllPhotos(id:any) {
    this.albumSer.getAllPhotos(id).subscribe(
      (data) => {
        console.log(data);
        this.photos = data;
        this.filteredArray = this.photos.slice(0,10);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  pageChanged(event:any) {
    this.currentPage = event.pageIndex;
    this.filteredArray = this.photos.slice((this.currentPage-1)*this.pageSize,this.pageSize*this.currentPage);
    console.log(this.filteredArray);

  }
}
