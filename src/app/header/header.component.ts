import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public toggleLoginButton:Boolean = false;

  constructor( 
    private loginService:LoginService,
    private router:Router,

  ) { }

  ngOnInit(): void {
    console.log(this.toggleLoginButton)
    this.toggleLoginButton = this.loginService.isLoggedIn();
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['\login']);
    this.toggleLoginButton = false;

  }

}
