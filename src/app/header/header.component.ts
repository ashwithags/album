import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public toggleLoginButton:Boolean = false;
  public loginTime:string  = '';


  constructor( 
    public loginService:LoginService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.loginTime = new Date().toString()
    console.log(this.loginTime);

  }
  ngDoCheck(): void {
    console.log('Change detected'+this.loginTime);
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['\login']);
    this.toggleLoginButton = false;
  }

}
