import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reports/HtmlReport';

const reader = new MatchReader(new CsvFileReader('football.csv'));
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('report')
);

reader.load();
summary.buildAndPrintReport(reader.matches);
