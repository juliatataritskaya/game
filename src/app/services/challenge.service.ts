import {Injectable} from '@angular/core';
import {ChallengeApiService} from './api/challenge.api.service';

@Injectable()
export class ChallengeService {

  constructor(private challengeApi: ChallengeApiService) {}

  public createChallenge(challengeData: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.challengeApi.postChallenge(challengeData).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  public getChallenge(guid: any): Promise<string> {
    return new Promise((resolve, reject) => {
      this.challengeApi.getChallenge(guid).then(result => {
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

  public  getAllChalenges(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.challengeApi.getChallenges().then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    })
  }

}
