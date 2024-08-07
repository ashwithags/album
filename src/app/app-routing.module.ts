import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './album/photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { AuthGurd } from './auth.gaurd';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'album', component:AlbumComponent, canActivate:[AuthGurd]},
  { path: 'photos', component:PhotosComponent,canActivate:[AuthGurd]},
  { path: 'posts', component:PostsComponent, canActivate:[AuthGurd]},
  { path: 'post/:id', component:PostComponent, canActivate:[AuthGurd]},
  { path: 'user/:id', component:UserComponent, canActivate:[AuthGurd]},
  { path: 'todo', component:TodoComponent, canActivate:[AuthGurd]},
  { path: 'login', component:LoginComponent},
  { path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
