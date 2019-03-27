import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class AuthApiService extends BaseHttpService {
  private static loginUrl = environment.serverUrl + '/api/v1/auth/login';
  private static registerUrl = environment.serverUrl + '/api/v1/users/register';

  constructor(protected http: HttpClient) {
    super(http);
  }

  public postLogin(loginData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.post(AuthApiService.loginUrl, {}, loginData)
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public postRegister(registerData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.post(AuthApiService.registerUrl, {}, registerData)
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

}
