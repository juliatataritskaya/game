import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {throwError as observableThrowError, Observable, throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public router: Router, private toastr: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError(error => {
        return this.catchErrors(error);
      })
    );
  }

  catchErrors(err) {
    // if (err.status === 400) {
    //   this.toastr.error(err.text, '');
    // }

    if (err.status === 404) {
      this.router.navigate(['error404']);
    }

    if (err.status === 0 || err.status.toString().includes('50')) {
      this.router.navigate(['error-server']);
    }
    return observableThrowError(err);
  }
}
