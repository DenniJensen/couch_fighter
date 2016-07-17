import { Component, Input } from '@angular/core';

import { Player } from './player';

@Component({
  selector: 'players',
  templateUrl: 'app/players.html'
})
export class PlayersComponent {
  title = 'Ich bin eine Liste';
  @Input()
  players: Player[];
}
