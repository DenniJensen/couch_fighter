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
  currentResult;

  private scoreBoard: Score[] = []

  ngOnChanges(change) {
    if (change.result) {
      console.log('Result changed!!!');
    }
    if (change.players) {
      if (change.players.currentValue.length > 0) {
        this.buildScoreBoard();
      }
    }
  }

  private buildScoreBoard() {
    for(let player of this.players) {
      this.scoreBoard.push(new Score(player))
    }
  }
}
