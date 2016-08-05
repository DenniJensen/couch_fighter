import { Component, Input } from '@angular/core'
import { Player } from './player'

@Component({
  selector: 'result',
  templateUrl: 'app/result.html'
})
export class ResultComponent {
  @Input()
  player1: Player = {name: 'Player1'}

  @Input()
  player2: Player = {name: 'Player2'};

  playerResult1: number;
  playerResult2: number;

  emitResult() {
    alert(this.playerResult1 + ' vs ' + this.playerResult2)
  }
}
