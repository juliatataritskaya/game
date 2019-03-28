import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutes} from './main.routing';
import {SharedModule} from '../../shared/shared.module';
import {StartComponent} from '../../components/strart/start.component';
import {ChoiceComponent} from '../../components/choice/choice.component';
import {UserAccountModule} from '../../components/user-account/user-account.module';

@NgModule({
  declarations: [
    MainComponent,
    StartComponent,
    ChoiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserAccountModule,
    RouterModule.forChild(MainRoutes),
  ],
  providers: []
})
export class MainModule {
}
