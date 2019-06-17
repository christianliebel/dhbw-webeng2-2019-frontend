import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickLogger]'
})
export class ClickLoggerDirective {
  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    console.log('🍦 clicked.');
  }

  constructor() { }

}
