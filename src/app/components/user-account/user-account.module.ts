import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {UserAccountComponent} from '../../components/user-account/user-account.component';
import {UserAccountRoutes} from './user-account.routing';
import {ProfileComponent} from './profile/profile.component';
import {MyChallengesComponent} from './my-challenges/my-challenges.component';

@NgModule({
  declarations: [
    UserAccountComponent,
    ProfileComponent,
    MyChallengesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(UserAccountRoutes),
  ],
  providers: []
})
export class UserAccountModule {
}
