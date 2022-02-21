import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[typeHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) { }

  @Input('type-affect') typeAffect:any;

  @HostListener('mouseover')
  mouseover() {
    this.elm.nativeElement.classList.add(this.typeAffect);
  }

  @HostListener('mouseout')
  mouseout() {
    this.elm.nativeElement.classList.remove(this.typeAffect);
  }

}
