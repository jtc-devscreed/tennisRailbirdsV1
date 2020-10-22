import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles = [
    {
      "id": 1,
      "title": "Tennis Rules!",
      "desc": "Tennis is a sport that originated in England around the 19th century and is now played in a host of countries around the world. There are four major tournaments known as the [Majors] that include Wimbledon, US Open, French Open and Australian tournament.",
      "owner": "Raj Tatavarthy",
    }
  ];

  constructor() {}

}
