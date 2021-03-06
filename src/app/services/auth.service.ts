import {Injectable} from '@angular/core';
import {AuthApiService} from './api/auth.api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private authApi: AuthApiService, public http: HttpClient, private router: Router) {}

  public getToken() {
    return JSON.parse(localStorage.getItem('token'));
  }

  public getUserEmail() {
    return localStorage.getItem('userEmail');
  }

  isAuthenticated(): boolean {
    return this.getToken() != null;
  }

  public login(loginData: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.authApi.postLogin(loginData).then(result => {
        localStorage.setItem('token', JSON.stringify(result));
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  public register(registerData: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.authApi.postRegister(registerData).then(result => {
        localStorage.setItem('token', JSON.stringify(result));
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
