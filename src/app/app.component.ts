import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'album';
  data = 'Angular';
  constructor(
  ) { 
 //   console.log('Constructor');

  }
  ngDoCheck(): void {
   // console.log('Change detected');
}
    ngOnInit() {
     //   console.log('Init');
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
    }
}
