import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {ReactiveFormsBaseClass} from '../../../shared/classes/reactive-forms.base.class';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent  extends ReactiveFormsBaseClass implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
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
        requiredtrue: 'You should agree.',
      },
    });
  }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      term: [true, [Validators.requiredTrue]]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(this.registerForm, data));
    this.onValueChanged(this.registerForm);
  }

  onSubmit() {
    this.authService.register(this.registerForm).then((res) => {
      this.registerForm.reset();
    }, (error) => {
      console.log(error);
    })
  }
}
