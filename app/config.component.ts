import { Component } from '@angular/core'

import { ConfigService } from './config.service'

@Component({
  selector: 'config',
  templateUrl: 'app/config.html'
})
export class ConfigComponent {
  title = 'Configure Tournament';
  bestOfRounds: number = 3;
  roundRobinRounds: number = 1;

  constructor(private configService: ConfigService) {}

  setRoundRobinRounds() {
    this.configService.setRoundRobinRounds(this.roundRobinRounds);
  }

  setBestOfRounds() {
    this.configService.setBestOfRounds(this.bestOfRounds);
  }
}
