import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {ReactiveFormsBaseClass} from '../../../shared/classes/reactive-forms.base.class';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent extends ReactiveFormsBaseClass implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService,
              private fb: FormBuilder) {
    super({
      email: '',
      password: ''
    }, {
      email: {
        required: 'Email is required.',
        email: 'Email is invalid'
      },
      password: {
        required: 'Password is required.',
      }
    });
  }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(this.loginForm, data));
    this.onValueChanged(this.loginForm);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).then((res) => {
      this.loginForm.reset();
    }, (error) => {
      console.log(error);
    })
  }

  onForgotPassword() {
    // this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }

  onRegister() {
    this.router.navigate(['registration'], {relativeTo: this.route.parent});
  }
}
