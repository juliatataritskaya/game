import {NgModule} from '@angular/core';
import {AuthApiService} from './api/auth.api.service';
import {AuthService} from './auth.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AuthService,
    AuthApiService
  ]
})
export class ServicesModule {
}
