import { Component, OnInit } from '@angular/core';

import { PlayersComponent } from './players.component';
import { Player } from './player';
import { PlayerService } from './player.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [PlayersComponent],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  title = 'Street Fighter Action!!!!';
  playerName = '';
  players: Player[];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
    this.playerService.getPlayers().then(players => this.players = players);
  }
}
