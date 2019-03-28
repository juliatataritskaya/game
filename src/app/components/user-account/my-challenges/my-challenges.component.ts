import { Component, OnInit } from '@angular/core';
import {UserChallengeService} from '../../../services/user-challenge.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html'
})
export class MyChallengesComponent implements OnInit {
  challenges: any = [];

  constructor(private userChallengeService: UserChallengeService, private authService: AuthService) { }

  ngOnInit() {
    this.getChallenges();
  }

  private getChallenges() {
    this.userChallengeService.getChallengesByUser(this.authService.getUserEmail()).then((res) => {
      this.challenges = res;
      console.log(res);
    })
  }

}
