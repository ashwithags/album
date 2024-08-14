import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppIfNot]'
})
export class AppIfNotDirective {

  private hasView = false;

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appAppIfNot(condition:Boolean){
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
    else if( condition && this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
