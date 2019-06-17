import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  @Input()
  @HostBinding('style.color')
  appTest: string;

  constructor() {
  }

}
