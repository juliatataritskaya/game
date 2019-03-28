import {Component, OnInit} from '@angular/core';
import {ChallengeService} from '../../../services/challenge.service';
import {AuthService} from '../../../services/auth.service';
import {UserChallengeService} from '../../../services/user-challenge.service';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {
  public challengesList = [];

  constructor(private challengeService: ChallengeService, private authService: AuthService,
              private userChallengeService: UserChallengeService) {
  }

  ngOnInit() {
    this.getAllChallenges();
  }

  public getAllChallenges() {
    this.challengeService.getAllChalenges().then((res) => {
      this.challengesList = res;
    })
  }

  public addToMyList(giud) {
    this.userChallengeService.addChallengeToUser(giud, this.authService.getUserEmail()).then((res) => {
      console.log(res);
    })
  }

}
