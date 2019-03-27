import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ToastrModule} from 'ngx-toastr';

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/auth.interceptor';
import {ErrorInterceptor} from './interceptors/error.interceptor';
import {AuthGuard} from './guards/auth.guard';
import {UnauthorizedGuard} from './guards/unauthorized.guard';
import {Error404Component} from '../components/error404';
import {ErrorServerComponent} from '../components/error-server';
import {LogoutComponent} from '../components/logout/logout.component';
import {HeaderComponent} from '../components/header/header.component';
import {ChallengesListComponent} from '../components/challenges/list/challenges-list.component';
import {ChallengesComponent} from '../components/challenges/challenges.component';
import {NewChallengeComponent} from '../components/challenges/new/new-challenge.component';
import {ViewChallengeComponent} from '../components/challenges/view/view-challenge.component';
import {ValidateOnBlurModule} from './directives/blur-form-control.directives';

@NgModule({
  declarations: [
    ErrorServerComponent,
    Error404Component,
    LogoutComponent,
    HeaderComponent,
    ChallengesListComponent,
    ChallengesComponent,
    NewChallengeComponent,
    ViewChallengeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule,
    ValidateOnBlurModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-full-width',
      progressBar: true
    })
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule,
    LogoutComponent,
    HeaderComponent,
    ChallengesListComponent,
    ChallengesComponent,
    NewChallengeComponent,
    ViewChallengeComponent,
    ValidateOnBlurModule,
  ],
  providers: [
    AuthGuard,
    UnauthorizedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
  ]
})
export class SharedModule {
}
