import { Injectable } from '@angular/core'
import { Player } from './player'

@Injectable()
export class PlayerService {
  players: Player[] = [];

  getPlayers() {
    return Promise.resolve(this.players);
  }

  addPlayer(name: string) {
    var player = new Player(name);
    this.players.push(player);
  }

  removePlayer(player: Player) {
    var index = this.players.indexOf(player);
    this.players.splice(index, 1);
  }
}
