import { Component, OnInit } from '@angular/core'

import { LeagueTableComponent } from './league-table.component'
import { Match } from './match'
import { MatchResult } from './match-result'
import { Player } from './player'
import { PlayerService } from './player.service'
import { Result } from './result'
import { ResultComponent } from './result.component'

@Component({
  selector: 'league',
  templateUrl: 'app/league.html',
  directives: [ResultComponent, LeagueTableComponent]
})
export class LeagueComponent implements OnInit {
  private currentResult;
  private currentMatchCount: number = 0;
  private matches: Match[] = [];
  private players: Player[] = [];
  private totalMatchCount: number = 0;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.setUpTournemant();
  }

  private setUpTournemant() {
    this.playerService.getPlayers().then(players => {
      this.players = players;
      this.scheduleMatches(players);
    });
  }

  private scheduleMatches(thePlayers: Player[]) {
    let players = thePlayers.slice(0, thePlayers.length)
    if (players.length % 2 != 0) {
      players.push( undefined );
    }
    this.assignMatchesFor(players);
    this.totalMatchCount = this.matches.length
  }

  private assignMatchesFor(players: Player[]) {
    let half_size = players.length / 2
    let first_half = players.slice(0, half_size)
    let secound_half = players.slice(half_size, players.length)

    for (let round = 0; round < players.length - 1; round++) {
      for (var player in first_half) {
        if (first_half[player] && secound_half[player]) {
          let newMatch = new Match(first_half[player], secound_half[player]);
          this.matches.push(newMatch);
        }
      }
      secound_half.push(first_half.pop())
      first_half.splice(1, 0, secound_half.shift())
    }
  }

  getCurrentMatch() {
    return this.matches[this.currentMatchCount]
  }

  isSettedUp() {
    return this.matches.length > 0;
  }

  onResult(result: Result) {
    this.currentResult = new MatchResult(this.getCurrentMatch(), result);
    this.nextMatch();
  }

  nextMatch() {
    if (this.currentMatchCount < this.matches.length - 1) {
      this.currentMatchCount++;
    }
  }
}
