import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// const winsAnalysis = new WinsAnalysis('Liverpool');
// const consoleReport = new ConsoleReport();
// const htmlReport = new HtmlReport("report.html");

// const summary = new Summary(winsAnalysis, htmlReport)
const summary = Summary.summary("Liverpool")
summary.buildAndPrintReport(matchReader.matches);