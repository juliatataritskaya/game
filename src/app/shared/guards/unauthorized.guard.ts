import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../services/auth.service';

@Injectable()
export class UnauthorizedGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(): Observable<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return false;
    } else {
      return true;
    }
  }
}
