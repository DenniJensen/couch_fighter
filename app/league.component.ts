import { Component, OnInit } from '@angular/core'

import { Player } from './player'
import { PlayerService } from './player.service'

@Component({
  selector: 'league',
  templateUrl: 'app/league.html'
})
export class LeagueComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    console.log(this.players)
    this.getPlayers();
  }

  private getPlayers() {
    this.playerService.getPlayers().then(players => this.players = players);
  }
}
