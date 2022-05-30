import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {

  constructor(private elRef: ElementRef) {

    elRef.nativeElement.style.fontSize='20px';

   }

}
