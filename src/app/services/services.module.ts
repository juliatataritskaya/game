import {NgModule} from '@angular/core';
import {AuthApiService} from './api/auth.api.service';
import {AuthService} from './auth.service';
import {ChallengeApiService} from './api/challenge.api.service';
import {ChallengeService} from './challenge.service';
import {UserChallengeApiService} from './api/user-challenge.api.service';
import {UserChallengeService} from './user-challenge.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AuthService,
    AuthApiService,
    ChallengeService,
    ChallengeApiService,
    UserChallengeService,
    UserChallengeApiService
  ]
})
export class ServicesModule {
}
