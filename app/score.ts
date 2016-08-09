import { Player } from './player'

export class Score {
  wins: number = 0;
  defeats: number = 0;
  scorePositive: number = 0;
  scoreNegative: number = 0;
  name: string;

  constructor(private player: Player) {
    this.name = player.name;
  }

  addScore(ownScore: number, opponentScore: number) {
    this.scorePositive += ownScore;
    this.scoreNegative += opponentScore;
    if (ownScore > opponentScore) {
      this.wins++;
    } else {
      this.defeats++;
    }
  }
}
