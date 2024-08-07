import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/posts.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId: any = 0;
  post: any;
  ViewComment: boolean = true;
  TotalLike:number=0;

  constructor(
    private route: ActivatedRoute,
    private postServ: PostsService
  ) {
    this.postId = this.route.snapshot.paramMap.get('id')!;

  }

  ngOnInit(): void {

    this.postServ.fetchPostOnId(this.postId).subscribe(
      (data) => {
        this.post = data;
        console.log(this.post);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  ViewComments() {
    if (this.ViewComment == false) {
      this.ViewComment = true;
    }
    else {
      this.ViewComment = false;
    }
  }

  updateEventHandler($event:any){
    this.TotalLike = $event;
  }

}
