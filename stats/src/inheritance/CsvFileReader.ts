import fs from "fs";

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public fileName: string) {}
  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((footballMatchStats: string): string[] =>
        footballMatchStats.split(",")
      )
      .map(this.mapRow);
  }
}
