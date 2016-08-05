import { Component, Input } from '@angular/core'
import { Player } from './player'

@Component({
  selector: 'league-table',
  templateUrl: 'app/league-table.html'
})
export class LeagueTableComponent {
  @Input()
  players: Player[] = [];
}
