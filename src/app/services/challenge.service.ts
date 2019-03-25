import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChallengeApiService} from './api/challenge.api.service';

@Injectable()
export class ChallengeService {

  constructor(private challengeApi: ChallengeApiService, public http: HttpClient) {}

  public createChallenge(challengeData: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.challengeApi.postChallenge(challengeData).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  public getChallenge(id: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.challengeApi.getChallenge(id).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  public updateChallenge(challengeData: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.challengeApi.putChallenge(challengeData).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

}
