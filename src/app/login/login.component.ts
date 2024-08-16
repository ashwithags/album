import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userLoginDetails:any = {
    expiresInMins:10
  };

  public ErrorMessgae:any ={};

  constructor(
    private loginServ:LoginService,
    private router:Router

  ) { }

  ngOnInit(): void {
  }

  getLoginDetails(){
    this.loginServ.checkLoggenInUser(this.userLoginDetails).subscribe(
      (data)=>{
        console.log(data);
        localStorage.setItem('token', data.token);
        this.router.navigate(['home'])
      },
      (error)=>{
        console.log(error);
        this.ErrorMessgae.Message = error;
        this.ErrorMessgae.messgeType = 'error';

      }
    )
    this.loginServ.isLoggedIn();
  }

  clearMessage(){
    this.ErrorMessgae.Message = '';
    this.ErrorMessgae.messgeType = '';
  }

 
}

