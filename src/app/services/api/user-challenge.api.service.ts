import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class UserChallengeApiService extends BaseHttpService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public putUserChallenge(challengeGuid: string, userEmail: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.put(environment.serverUrl + 'user-challenge-data/challenge/' + challengeGuid + '/user/email/' + userEmail, {}, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getUserChallenge(userEmail: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(environment.serverUrl + '/user-challenge-data/user/email/' + userEmail, {}, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }


}
