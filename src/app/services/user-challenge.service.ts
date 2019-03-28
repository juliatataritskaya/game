import {Injectable} from '@angular/core';
import {UserChallengeApiService} from './api/user-challenge.api.service';

@Injectable()
export class UserChallengeService {

  constructor(private userChallengeApi: UserChallengeApiService) {}


  public addChallengeToUser(challengeGuid: string, userEmail: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.userChallengeApi.putUserChallenge(challengeGuid, userEmail).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }

  public getChallengesByUser(userEmail: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.userChallengeApi.getUserChallenge(userEmail).then(result => {
        resolve(result);
      }, error => {
        reject(error);
      });
    });
  }
}
