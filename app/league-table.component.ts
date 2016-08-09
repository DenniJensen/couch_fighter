import { Component, Input, OnChanges, SimpleChange } from '@angular/core'

import { Player } from './player'
import { Score } from './score'

@Component({
  selector: 'league-table',
  templateUrl: 'app/league-table.html'
})
export class LeagueTableComponent implements OnChanges {
  @Input()
  players: Player[] = [];

  @Input()
  currentMatchResult;

  private scoreBoard: Score[] = []

  ngOnChanges(change) {
    if (change.currentMatchResult && change.currentMatchResult.currentValue) {
      this.handleNewResult();
    }
    if (change.players) {
      if (change.players.currentValue.length > 0) {
        this.buildScoreBoard();
      }
    }
  }

  private handleNewResult() {
    let match = this.currentMatchResult.match;
    let player1 = this.getScoreFromPlayerName(match.player1.name);
    let player2 = this.getScoreFromPlayerName(match.player2.name);
    let result = this.currentMatchResult.result;
    player1.addScore(result.score1, result.score2);
    player2.addScore(result.score2, result.score1);
  }

  private getScoreFromPlayerName(name: string) {
    return this.scoreBoard.find((score) => { return score.name == name });
  }

  private buildScoreBoard() {
    for(let player of this.players) {
      this.scoreBoard.push(new Score(player));
    }
  }
}
