import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.page.html',
  styleUrls: ['./objective.page.scss'],
})
export class ObjectivePage implements OnInit {

  articles = [
    {
      "id": 1,
      "title": "Objective of the Game!",
      "desc": "The game of tennis played on a rectangular court with a net running across the center. The aim is to hit the ball over the net landing the ball within the margins of the court and in a way that results in your opponent being unable to return the ball. You win a point every time your opponent is unable to return the ball within the court.",
      "owner": "Julia Kuzenkov",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
