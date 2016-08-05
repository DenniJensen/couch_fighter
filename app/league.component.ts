import { Component, OnInit } from '@angular/core'

import { ResultComponent } from './result.component'
import { LeagueTableComponent } from './league-table.component'
import { Player } from './player'
import { PlayerService } from './player.service'

@Component({
  selector: 'league',
  templateUrl: 'app/league.html',
  directives: [ResultComponent, LeagueTableComponent]
})
export class LeagueComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers() {
    this.playerService.getPlayers().then(players => this.players = players);
  }
}
