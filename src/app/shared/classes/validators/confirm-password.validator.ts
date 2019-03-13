import {AbstractControl} from '@angular/forms';

export function ValidateConfirmPassword(control: AbstractControl) {
  if (control.get('password').value &&
    control.get('password').value !== control.get('confirmPassword').value &&
    (control.get('confirmPassword').dirty ||
      control.get('confirmPassword').touched)) {
    return {confirm: 'Confirmed password must match the password.'};
  }
  return null;
}
