import {throwError as observableThrowError, Observable} from 'rxjs';

import {take, catchError, switchMap, finalize} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {SpinnerVisibilityService} from 'ng-http-loader';
import 'rxjs-compat/add/operator/finally';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService, private spinner: SpinnerVisibilityService) {
  }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({setHeaders: {Authorization: token}});
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

   console.log(this.auth.getToken());
    const authHeader  = this.auth.getToken() ? 'Bearer ' + this.auth.getToken()['token'] : '';
    this.spinner.show();

    return next.handle(this.addToken(req, authHeader)).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 401:
              return this.handle401Error();
            default:
              return observableThrowError(error);
          }
        } else {
          return observableThrowError(error);
        }
      }), finalize(() => this.spinner.hide()));
  }

  handle401Error() {
    return this.logoutUser()
  }

  logoutUser() {
    this.auth.logout();
    return observableThrowError('');
  }
}
