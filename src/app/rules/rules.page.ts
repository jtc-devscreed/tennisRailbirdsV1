import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {

  articles = [
    {
      "id": 1,
      "title": "Follow the Rules!",
      "desc1": "Just the basics and nothing more. If you have any wonderful, new or better yet a sort of a revolutionary idea, please just keep to yourself, 'will yah? I am not at know it all, hope you are not one too.",
      "desc2": "This is just for the sole purpose of giving an simple insight so you or some other folks out there whom are willing that somehow they might be able to get a glimpse of how this awesome game is played. Cheers! ^_^",
      "owner": "Joshua Miranda",
      "img": "assets/images/rules.jpeg"
    },
    { 
      "id": 2,
      "title": "Rule No. 1",
      "desc1": "A tennis game is played on a rectangular court with a net running across the centre. The aim is to hit the tennis ball over the net landing the ball within the margins of the court and in a way that results in your opponent being unable to return the ball. You win a point every time your opponent is unable to return the ball within the court.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 3,
      "title": "Rule No. 2",
      "desc1": "The server must then serve each point from alternative sides on the base line. At no point must the server’s feet move in front of the baseline on the court prior to hitting their serve.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 4,
      "title": "Rule No. 3",
      "desc1": "If the server fails to get their first serve in they may take advantage of a second serve. If they again fail to get their second serve in then a double fault will be called and the point lost.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 5,
      "title": "Rule No. 4",
      "desc1": "The receiver may stand where they wish upon receipt of the serve. If the ball is struck without the serve bouncing then the server will receive the point.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 6,
      "title": "Rule No. 5",
      "desc1": "Once a serve has been made the amount of shots between the players can be unlimited. The point is won by hitting the ball so the opponent fails to return it in the scoring areas.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 7,
      "title": "Rule No. 6",
      "desc1": "Points are awarded in scores of 15, 30 and 40. 15 represent 1 point, 30 = 2 and 40 = 3. You need 4 points to win a game. If a game lands on 40-40 it’s known as deuce. From deuce a player needs to win 2 consecutive points to win the game. After winning one point from deuce they player is on advantage. If the player wins the next point they win the game, if they lose it goes back to deuce.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 8,
      "title": "Rule No. 7",
      "desc1": "To win the set a player must win 6 games by 2 or more. The opening sets will go to a tie break if its ends up 6-6 where players play first to 7 points. The final set will not have a tie break and requires players to win by two games with no limits.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 9,
      "title": "Rule No. 8",
      "desc1": "If a player touches the net, distracts his opponent or impedes in anyway then they automatically lose the point.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 10,
      "title": "Rule No. 9",
      "desc1": "The ball can hit any part of the line for the point to be called in, outside the line and the ball is out.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 11,
      "title": "Rule No. 10",
      "desc1": "The balls in a tennis match are changed for new balls every 6 games.",
      "owner": "Matthew Turner",
      "img": "",
    },
    {
      "id": 12,
      "title": "Rule No. 11",
      "desc1": "A player loses a point if they fail to return the ball in either the correct areas on the court, hits the net and doesn’t go into opponent’s area or fails to return the ball before it bounces twice in their half.",
      "owner": "Matthew Turner",
      "img": "",
    },
  ];

  constructor() {
    
   }

  ngOnInit() {
  }

}
