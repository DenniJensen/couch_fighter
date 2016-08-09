import { Component, OnInit } from '@angular/core'

import { LeagueTableComponent } from './league-table.component'
import { Match } from './match'
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
  private currentMatch: number = 0;
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

  private scheduleMatches(players: Player[]) {
    let players = players.slice(0, players.length)
    if (players.length % 2 != 0) {
      players.push( undefined );
    }
    this.assignMatchesFor(players);
    this.totalMatchCount = this.matches.length
  }

  private assignMatchesFor(players: Players) {
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
    return this.matches[this.currentMatch]
  }

  isSettedUp() {
    return this.matches.length > 0;
  }

  onResult(result: Result) {
    console.log('Got emitted!');
    console.log('Score1: ' + result.score1);
    console.log('Score2: ' + result.score2);
    // Push match + score into MatchesService
    this.nextMatch();
  }

  nextMatch() {
    if (this.currentMatch < this.matches.length - 1) {
      this.currentMatch++;
    }
  }
}
