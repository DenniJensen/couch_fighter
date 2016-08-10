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
  MINIMUM_PLAYERS = 3;
  playerName = '';
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers() {
    this.playerService.getPlayers()
      .then(players => this.players = players);
  }

  addPlayer() {
    if (this.playerName.trim()) {
      if(!this.isExistingPlayer()) {
        this.playerService.addPlayer(this.playerName);
      }
    }
    this.playerName = '';
  }

  removePlayer(player: Player) {
    this.playerService.removePlayer(player);
  }

  playerNeeded() {
    return this.MINIMUM_PLAYERS - this.players.length
  }

  enoughPlayers() {
    return this.players.length > 2
  }

  private isExistingPlayer() {
    let playerName = this.playerName;
    let found = this.players.find(function(player) {
      return player.name == playerName;
    });
    return (found) ? true : false;
  }
}
