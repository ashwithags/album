import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "./Services/login.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class AuthGurd implements CanActivate{
    constructor(
        private loginService:LoginService,
        private router:Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {

        if(this.loginService.isLoggedIn()){
            return true;
        }
        else{
            this.router.navigate(['login'])
            return false;
        }
    }
}