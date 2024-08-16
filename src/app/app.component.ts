import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy, 
  OnChanges} from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'album';
  data = 'Angular';
  constructor(
    private loginServ:LoginService
  ) { 
 //   console.log('Constructor');

  }

  ngOnChanges(){
    console.log('ng on Change detected');

  }
  ngDoCheck(): void {
    console.log('Change detected');
    this.loginServ.isLoggedIn();
  }
    ngOnInit() {
        console.log('Init');
    }
  
    ngAfterContentInit(): void {
     //   console.log('After content init');
    }
    ngAfterContentChecked(): void {
    //    console.log('After content checked');
    }
    ngAfterViewInit(): void {
    //    console.log('After view init');
    }
    ngAfterViewChecked(): void {
    //    console.log('After view checked');
    }
    ngOnDestroy(): void {
    //    console.log('Destroy');
    localStorage.removeItem('token');
    }
}
