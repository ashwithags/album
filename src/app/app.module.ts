import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './album/photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { CommentsComponent } from './posts/post/comments/comments.component';
import { UserComponent } from './user/user.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { ErrorMessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { AppIfNotDirective } from './directives/app-if-not.directive';
import { TimeAgoPipe } from './pipe/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    PhotosComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    UserComponent,
    FilterPipe,
    HomeComponent,
    HeaderComponent,
    TodoComponent,
    ErrorMessageComponent,
    LoginComponent,
    AppIfNotDirective,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
