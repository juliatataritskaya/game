import {
  Directive,
  Input, HostListener, NgModule
} from '@angular/core';

@Directive({
  selector: '[appValidateOnBlur]'
})

export class ValidateOnBlurDirective {

  @Input('validateFormControl') validateFormControl;

  constructor() {
  }

  @HostListener('blur') onBlur() {
    this.validateFormControl();
  }
}

@NgModule({
  declarations: [ValidateOnBlurDirective],
  exports: [ValidateOnBlurDirective]
})

export class ValidateOnBlurModule {
}
