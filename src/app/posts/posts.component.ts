import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { Route, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor( 
    private postServ:PostsService,
    private router:Router,
    private userSer: UserService

  ) { }

  Posts:any[]=[];
  UserId:any;
  UserList:any[]=[];
  PostWithUserDetails:any[]=[];
  SelectedUser:any;

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(){
    this.postServ.fetchPostsAll().subscribe(
      (data)=>{
        this.Posts = data;
        this.fetchUserDetails();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  ViewPost(id:number){
    this.router.navigate(['/post/'+id]);
    console.log(id);
  }

  goToUserDetails(id:number){
    this.UserId = id;
    this.router.navigate(['user/'+id]);

  }

  fetchUserDetails(){
    this.userSer.fetchUserDetails(this.UserId).subscribe(
      (data)=>{
        console.log(data);
        this.UserList = data;

       this.PostWithUserDetails = this.Posts.map((post)=>{

          const userData = this.UserList.find((user)=> user.id == post.userId);
          //console.log(userData);

         // return userData?{...post, email:userData.email}:post; ------------to merge only email in the post object

         if(userData){

            const {email,name} = userData; //-----destructure email and name from userdata

            return {...post, email, name} // merge email ans name to ..post object
         }
         else{
           return post;
         }

        })

        console.log(this.PostWithUserDetails);

      }
    )
  }


}
