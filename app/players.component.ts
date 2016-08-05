import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Player } from './player';
import { PlayerService } from './player.service'

@Component({
  selector: 'players',
  templateUrl: 'app/players.html',
  directives: [ROUTER_DIRECTIVES]
})
export class PlayersComponent {
  title = 'Add Players';
  playerName = ''
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers()
      .then(players => this.players = players);
  }

  addPlayer() {
    if (this.playerName.trim()) {
      this.playerService.addPlayer(this.playerName);
    }
    this.playerName = '';
  }

  removePlayer(player: Player) {
    this.playerService.removePlayer(player);
  }

  enoughPlayers() {
    return this.players.length > 2
  }
}
