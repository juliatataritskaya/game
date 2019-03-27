import {Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginPageComponent} from './login/login-page.component';
import {RegisterPageComponent} from './register/register-page.component';
import {UnauthorizedGuard} from '../../shared/guards/unauthorized.guard';

export const AuthRoutes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent, canActivate: [UnauthorizedGuard], children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'registration', component: RegisterPageComponent}
    ]
  },
];
