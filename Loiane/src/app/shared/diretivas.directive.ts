import { Directive, ElementRef, Renderer } from '@angular/core';
@Directive({
  selector: '[FundoAmarelo]'
})
export class DiretivasDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
}
