import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCreditcardoffer]'
})
export class CreditcardofferDirective {

  @Input() appCreditcardoffer: any;

  constructor(private variableForElement: ElementRef) { 
    this.variableForElement = variableForElement;
  }

  ngOnInit() {
    this.variableForElement.nativeElement.innerHTML +=" <a href='offer'>Credit card offer</a>";
  }
  
}
