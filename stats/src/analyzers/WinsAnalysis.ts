import { MatchData } from "../MatchData";
import { PossibleMatchResults } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let footballMatch of matches) {
      const homeTeam = footballMatch[1];
      const awayTeam = footballMatch[2];

      const winner = footballMatch[5];

      if (homeTeam === this.team && winner === PossibleMatchResults.HomeWin) {
        wins++;
      } else if (
        awayTeam === this.team &&
        winner === PossibleMatchResults.AwayWin
      ) {
        wins++;
      }
    }

    return `${this.team} has ${wins} wins...`;
  }
}
