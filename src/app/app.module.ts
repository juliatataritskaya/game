import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {ToastrModule} from 'ngx-toastr';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {StoreModule} from '@ngrx/store';
import {DragulaModule} from 'ng2-dragula';

import {AppComponent} from './app.component';

import * as $ from 'jquery';
import {AuthModule} from './modules/auth/auth.module';
import {ServicesModule} from './services/services.module';
import {SharedModule} from './shared/shared.module';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {MainModule} from './modules/main/main.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AuthModule,
    MainModule,
    ServicesModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    DragulaModule.forRoot(),
    HttpClientModule,
    NgHttpLoaderModule,
    SharedModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
