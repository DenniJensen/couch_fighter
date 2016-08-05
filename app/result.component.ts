import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Player } from './player'
import { Result } from './result'

@Component({
  selector: 'result',
  templateUrl: 'app/result.html'
})
export class ResultComponent {
  @Input()
  player1: Player;
  @Input()
  player2: Player;

  private score1: number;
  private score2: number;

  @Output()
  result = new EventEmitter<Result>();

  emitResult() {
    let result = new Result(this.score1, this.score2);
    this.result.emit(result);
    this.result1 = '';
    this.result2 = '';
  }
}
