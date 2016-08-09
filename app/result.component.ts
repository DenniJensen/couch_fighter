import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Match } from './match'
import { Player } from './player'
import { Result } from './result'

@Component({
  selector: 'result',
  templateUrl: 'app/result.html'
})
export class ResultComponent {
  @Input() currentMatch: Match;
  @Input() totalMatchCount: number;
  matchCounter: number = 1;

  private score1: number;
  private score2: number;

  @Output()
  result = new EventEmitter<Result>();

  emitResult() {
    let result = new Result(this.score1, this.score2);
    this.result.emit(result);
    this.score1 = undefined;
    this.score2 = undefined;
    if (this.matchCounter < this.totalMatchCount) {
      this.matchCounter++;
    }
  }
}
