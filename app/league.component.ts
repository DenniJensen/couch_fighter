import { Component, OnInit } from '@angular/core'

import { ResultComponent } from './result.component'
import { LeagueTableComponent } from './league-table.component'
import { Player } from './player'
import { Result } from './result'
import { PlayerService } from './player.service'

@Component({
  selector: 'league',
  templateUrl: 'app/league.html',
  directives: [ResultComponent, LeagueTableComponent]
})
export class LeagueComponent implements OnInit {
  currentMatch: number = 0;
  players: Player[] = [];
  private matches = [];

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.setUpTournemant();
  }

  getCurrentMatch() {
    return this.matches[this.currentMatch]
  }

  nextMatch() {
    if (this.currentMatch < this.matches.length - 1) {
      this.currentMatch++;
    }
  }

  isSettedUp() {
    return this.matches.length > 0;
  }

  onResult(fakeResult: Match) {
    console.log('Got emitted!');
    console.log(fakeResult);
    this.nextMatch();
  }

  private setUpTournemant() {
    this.playerService.getPlayers().then(players => {
      this.players = players;
      this.scheduleMatches(players);
    });
  }

  private scheduleMatches(players: Player[]) {
    this.matches.push(
      {
        player1: this.players[0],
        player2: this.players[1]
      },
      {
        player1: this.players[1],
        player2: this.players[2]
      }
    )
  }
}
