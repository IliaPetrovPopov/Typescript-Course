import { dateStringToDate } from "./utils";
import { PossibleMatchResults } from "./MatchResult";
import { MatchData } from "./MatchData";


interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (footballMatchStats: string[]): MatchData => {
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
    );
  }
}
