import { Player } from './player'

export class Score {
  defeats: number = 0;
  gamesPlayed: number = 0;
  name: string;
  scoreNegative: number = 0;
  scorePositive: number = 0;
  wins: number = 0;

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
    this.gamesPlayed++;
  }

  getPoints(): number {
    return this.wins
  }
}
