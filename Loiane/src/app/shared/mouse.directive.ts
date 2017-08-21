import { Directive, HostListener,  HostBinding } from '@angular/core';

@Directive({
  selector: '[Mouse]'
})
export class MouseDirective {
  @HostListener('mouseenter') mexemouse(){
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','yellow');
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'font-size','x-large');
    this.backgroundColor = 'yellow';

  }
   @HostBinding('style.background-color') backgroundColor:string;
   @HostBinding('style.font-size')fontsize:string;

   @HostListener('mouseleave') saimouse(){
   // this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','white');
   // this.renderer.setElementStyle(this.elementRef.nativeElement,'font-size','medium');

   this.backgroundColor = 'white';

  }
  constructor() {}
}
