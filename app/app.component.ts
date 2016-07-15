import { Component } from '@angular/core';
import { PlayerListComponent } from './player_list.component';

class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [PlayerListComponent]
})
export class AppComponent {
  title = 'Street Fighter Action!!!!';
  playerName = '';
  playerList: Player[] = [];

  addPlayer() {
    name = this.playerName.trim();
    if (name) {
      var player = new Player(name);
      this.playerList.push(player);
      this.playerName = '';
    }
  }

  removePlayer(player: Player) {
    var index = this.playerList.indexOf(player);
    this.playerList.splice(index, 1);
  }
}
