import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {StartComponent} from '../../components/strart/start.component';
import {ChoiceComponent} from '../../components/choice/choice.component';
import {NewChallengeComponent} from '../../components/challenges/new/new-challenge.component';
import {ViewChallengeComponent} from '../../components/challenges/view/view-challenge.component';
import {AuthGuard} from '../../shared/guards/auth.guard';
import {UserAccountRoutes} from '../../components/user-account/user-account.routing';
import {NewTaskComponent} from '../../components/tasks/new/new-task.component';
import {ViewTaskComponent} from '../../components/tasks/view/view-task.component';

export const MainRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'start', pathMatch: 'full'},
      {path: 'start', component: StartComponent},
      {path: 'choice', component: ChoiceComponent},
      {path: 'challenge/new', component: NewChallengeComponent},
      {path: 'challenge/view/:guid', component: ViewChallengeComponent},
      {path: 'task/new', component: NewTaskComponent},
      {path: 'task/view/:guid', component: ViewTaskComponent},
      ...UserAccountRoutes
    ]
  },
];
