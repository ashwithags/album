import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../Services/posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userId: any;
  public userList: any[] = [];
  public UserDetails: any;
  public Posts:any[] = [] ;
  public displayCount:number = 3;
  public showPost: boolean = false;
  public NewPost:any = {}

  constructor(
    private UserServ: UserService,
    private postServ: PostsService,
    private router: ActivatedRoute
  ) {
    this.userId = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.UserServ.fetchUserDetails(this.userId).subscribe(
      (data) => {
        console.log(data);
        this.UserDetails = data;
        console.log(this.UserDetails);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getPosts(){

    this.postServ.fetchPostsAll().subscribe(

      (data)=>{
        console.log(data);
        let posts=data;
        posts.forEach((post:any) => {

          this.Posts.unshift(post)
          
        });
        this.Posts.push(data);
        this.Posts = this.Posts.filter((post:any)=> {
          return post.userId == this.UserDetails[0].id
        })
        console.log(this.Posts);


      },
      (error)=>{
        console.log(error);
      }

    )

  }

  LoadMorePosts(){
    this.displayCount = this.Posts.length;
  }


  showPosts(){
    this.showPost = true;
  }
  AddPost(){
    this.NewPost.id = this.Posts.length+1;
    this.NewPost.userId = this.userId;
    this.Posts.push(this.NewPost);
    this.NewPost = new Object();
  }


}
