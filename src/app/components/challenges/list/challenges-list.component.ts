import {Component, OnInit} from '@angular/core';
import {ChallengeService} from '../../../services/challenge.service';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {
  public challengesList = [];

  constructor(private challengeService: ChallengeService) {
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
    console.log(giud);
  }

}
