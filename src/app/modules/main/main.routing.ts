import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {StartComponent} from '../../components/strart/start.component';
import {ChoiceComponent} from '../../components/choice/choice.component';
import {NewChallengeComponent} from '../../components/challenges/new/new-challenge.component';
import {ViewChallengeComponent} from '../../components/challenges/view/view-challenge.component';
import {AuthGuard} from '../../shared/guards/auth.guard';

export const MainRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'start', pathMatch: 'full'},
      {path: 'start', component: StartComponent},
      {path: 'choice', component: ChoiceComponent},
      {path: 'challenge/new', component: NewChallengeComponent},
      {path: 'challenge/view', component: ViewChallengeComponent}
    ]
  },
];
