import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
  public spinkit = Spinkit;

}
