import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class ChallengeApiService extends BaseHttpService {
  private static challengeUrl = environment.serverUrl + '/challenge';

  constructor(protected http: HttpClient) {
    super(http);
  }

  public postChallenge(challengeData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.post(ChallengeApiService.challengeUrl, challengeData, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public putChallenge(challengeData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.post(ChallengeApiService.challengeUrl, challengeData, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getChallenge(id: Number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(ChallengeApiService.challengeUrl, id, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

}
