import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
})
export class EquipmentPage implements OnInit {

  articles = [
    {
      "id": 1,
      "title": "Players & Equipments!",
      "desc1": "A tennis match can be played by either one player on each side – a singles match – or two players on each side – a doubles match. The rectangular shaped court has a base line (at the back), service areas (two spaces just over the net in which a successful serve must land in) and two tram lines down either side. A singles match will mean you use the inner side tram line and a doubles match will mean you use the outer tram line.",
      "desc2": "A tennis match is played with players on both side of the tennis court. A Singles Match which is typically one player versus another player, or a Doubles Match which is two (2) players versus two (2) players. A tennis court is shaped like a rectangular lined court with a base line (at the back), service areas (2 spaces just over the net) where a successful serve must land in and two tram lines down either side. A Singles Match is where a player would use the inner side tram line and a Doubles Match is where the players will use the outer side tramline.",
      "owner": "Lluis Aragones",
      "image": ""
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
