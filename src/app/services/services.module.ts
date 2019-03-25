import {NgModule} from '@angular/core';
import {AuthApiService} from './api/auth.api.service';
import {AuthService} from './auth.service';
import {ChallengeApiService} from './api/challenge.api.service';
import {ChallengeService} from './challenge.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AuthService,
    AuthApiService,
    ChallengeService,
    ChallengeApiService
  ]
})
export class ServicesModule {
}
