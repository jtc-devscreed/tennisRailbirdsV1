import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winning',
  templateUrl: './winning.page.html',
  styleUrls: ['./winning.page.scss'],
})
export class WinningPage implements OnInit {

  articles = [
    {
      "id": 1,
      "title": "Winning? Where's the trophy?",
      "desc": "To win the game you must win a certain amount of sets (best of three for women’s matches & best of 5 sets for men’s matches). Winning a set is simply the first player to reach 6 games, but have to be clear by at least 2 games. If your opponent wins 5 games you must win the set 7-5. If the set goes to 6-6 then a tie break is played and it’s simply the first player to 7 points.",
      "owner": "Isabella Mendes",
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
