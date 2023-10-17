import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { PossibleMatchResults } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);

matchReader.load();
let liverpoolWins = 0;

for (let footballMatch of matchReader.matches) {
  const homeTeam = footballMatch[1];
  const awayTeam = footballMatch[2];

  const winner = footballMatch[5];

  if (homeTeam === "Liverpool" && winner === PossibleMatchResults.HomeWin) {
    liverpoolWins++;
  } else if (
    awayTeam === "Liverpool" &&
    winner === PossibleMatchResults.AwayWin
  ) {
    liverpoolWins++;
  }
}

console.log(`Liverpool won ${liverpoolWins} games...`);
