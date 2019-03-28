import {Routes} from '@angular/router';
import {AuthGuard} from '../../shared/guards/auth.guard';
import {UserAccountComponent} from '../../components/user-account/user-account.component';
import {MyChallengesComponent} from './my-challenges/my-challenges.component';
import {ProfileComponent} from './profile/profile.component';

export const UserAccountRoutes: Routes = [
  {path: 'account', component: UserAccountComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'challenges', pathMatch: 'full'},
      {path: 'challenges', component: MyChallengesComponent},
      {path: 'profile', component: ProfileComponent},
    ]
  },
];
