import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.page.html',
  styleUrls: ['./scoring.page.scss'],
})
export class ScoringPage implements OnInit {

  articles = [
    {
      "id": 1,
      "title": "Score as much as you can!",
      "desc": "You need to score four points to win a game of tennis. The points are known as 15 (1 point), 30 (two points), 40 (three points) & the fourth would result in the winning point and the end of that game. If the scores went to 40-40 this would be known as deuce. When a game reaches deuce the player must then win by two clear points.",
      "owner": "Mat Brown",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
