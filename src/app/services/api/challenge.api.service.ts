import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class ChallengeApiService extends BaseHttpService {
  private static challengeUrl = environment.serverUrl + 'challenge';
  private static challengesUrl = environment.serverUrl + 'challenges';

  constructor(protected http: HttpClient) {
    super(http);
  }

  public postChallenge(challengeData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.post(ChallengeApiService.challengesUrl, {}, challengeData)
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public putChallenge(challengeData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.put(ChallengeApiService.challengeUrl, challengeData, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getChallenge(guid: Number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(ChallengeApiService.challengesUrl + '/guid/' + guid, {}, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

  public getChallenges(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(ChallengeApiService.challengesUrl, {})
        .subscribe(result => {
          resolve(result);
        }, error => {
          reject(error);
        });
    });
  }

}
