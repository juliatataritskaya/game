import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {ReactiveFormsBaseClass} from '../../../shared/classes/reactive-forms.base.class';
import {ValidateConfirmPassword} from '../../../shared/classes/validators/confirm-password.validator';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent  extends ReactiveFormsBaseClass implements OnInit {
  registerForm: FormGroup;
  messageError: string = '';

  constructor(private authService: AuthService, private router: Router) {
    super({
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
      term: true
    }, {
      email: {
        required: 'Email is required.',
        email: 'Email is invalid.'
      },
      password: {
        required: 'Password is required.',
      },
      confirmPassword : {
        required: 'Confirmed password is required.',
      },
      username: {
        required: 'Username is required.',
      },
      term: {
        required: 'You should agree.',
      },
    });
  }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm =  new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', {validators: Validators.required}),
      term: new FormControl(true, [Validators.requiredTrue])
    }, {validators: ValidateConfirmPassword});

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(this.registerForm, data));
    this.onValueChanged(this.registerForm);
  }

  onSubmit() {
    this.messageError = '';
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(this.registerForm.value).then(() => {
      localStorage.setItem('userEmail', this.registerForm.value.email);
      this.router.navigate(['main']);
    }, (error) => {
      if (error.status == 409) {
        this.messageError = 'User with this email already exists.'
      }
    })
  }

  setBlur() {
    return () => {
      this.onValueChanged(this.registerForm);
    };
  }
}
