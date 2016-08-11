import { Injectable } from '@angular/core'

@Injectable()
export class ConfigService {
  private roundRobinRounds:number = 1;
  private bestOfRounds:number = 3;

  setRoundRobinRounds(rounds) {
    this.roundRobinRounds = rounds;
  }

  getRoundRobinRounds() {
    return this.roundRobinRounds;
  }

  setBestOfRounds(rounds) {
    this.bestOfRounds = rounds
  }

  getBestOfRounds() {
    return this.bestOfRounds;
  }
}
