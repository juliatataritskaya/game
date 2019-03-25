import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {
  public challengesList = [];

  ngOnInit() {
    this.challengesList = [
      {
        name: 'Ch1',
        imgUrl: 'link',
        title: 'Ch-title',
        description: 'ghfehfuhewuf bhsdbhdv  usduc sdjsfj'
      },
      {
        name: 'Ch2',
        imgUrl: 'link',
        title: 'Ch2-title',
        description: 'ghfehfuhevr ufr brdv usdrjsfj'
      }
    ]
  }

}
