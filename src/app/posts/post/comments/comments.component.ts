import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { error } from 'console';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private postServ: PostsService) { }

  @Input() postId: any;

  @Output() UpdateTotalLikes = new EventEmitter<Number>();

  comments: any[] = [];
  TotalLike: Number = 0;
  NewComment: any = {};
  commentLengthError:boolean= false;


  ngOnInit(): void {
    console.log(this.postId);

    this.getCommentsForThePost(this.postId);

  }

  getCommentsForThePost(postId: any) {
    this.postServ.fetchComments(postId).subscribe(
      (data) => {
        console.log(data);
        this.comments = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  LikeComment(id: number) {
    this.comments.forEach(comment => {
      if (comment.id == id) {
        comment.like = 1;
      }
    });
    this.calculateTotalLikes();
  }

  calculateTotalLikes() {
    let TotalLike = 0;
    this.comments.forEach((com) => {
      if (com.like == 1) {
        TotalLike = TotalLike + 1;
      }
    })

    this.TotalLike = TotalLike;
    this.UpdateTotalLikes.emit(this.TotalLike);
  }

  AddNewComment() {

    if(this.NewComment.body.length <=10){
      this.commentLengthError = true;
    }
    else{
      this.NewComment.name ='Ashwitha',
      this.NewComment.email= 'ashwitha@gmail.com',
      this.NewComment.postId = this.postId;
      this.NewComment.id = this.comments.length + 1;
      this.comments.push(this.NewComment);
      this.commentLengthError = false;
      this.NewComment = {};
    }
  }

  DeleteComment(id: number) {
    this.comments = this.comments.filter((comment) => {
      return comment.id != id;
    });
  }

}
