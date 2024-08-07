import { Component, Input, Output, OnInit, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  constructor() { }

  @Input() Message!: any;

  @Output() messageClosed = new EventEmitter<void>();

  ngOnInit(): void {  }

  ngOnChanges(changes:SimpleChange){
    if ( this.Message && this.Message.messageType === 'error') {
      setTimeout(() => {
        this.closeMessage();
      }, 3000);
    }
  }

  closeMessage(){
    this.messageClosed.emit();
  }

}