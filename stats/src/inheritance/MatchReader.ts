import { CsvFileReader } from "./CsvFileReader";
import { PossibleMatchResults } from "./MatchResult";
import { dateStringToDate } from "./utils";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  PossibleMatchResults,
  string
];
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(footballMatchStats: string[]): MatchData {
    return [
      dateStringToDate(footballMatchStats[0]),
      footballMatchStats[1],
      footballMatchStats[2],
      parseInt(footballMatchStats[3]),
      parseInt(footballMatchStats[4]),
      footballMatchStats[5] as PossibleMatchResults,
      footballMatchStats[6],
    ];
  }
}
