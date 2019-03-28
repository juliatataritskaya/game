import {Component, OnInit} from '@angular/core';
import {ChallengeService} from '../../../services/challenge.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-view-challenge',
  templateUrl: './view-challenge.component.html',
  styleUrls: ['./view-challenge.component.scss']
})
export class ViewChallengeComponent implements OnInit {
  challengeData = {};
  guid = '';

  constructor(private challengeService: ChallengeService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.guid = this.route.snapshot.paramMap.get('guid');
    this.getChallenge(this.guid);
  }

  private getChallenge(guid) {
    this.challengeService.getChallenge(guid).then((res) => {
      this.challengeData = res;
    });
  }

}
