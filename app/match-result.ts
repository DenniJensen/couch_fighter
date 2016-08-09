import { Result } from './result'
import { Match } from './match'

export class MatchResult {
  constructor(private match: Match, private result: Result) {}
}
