import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const dataToArray = this.data.split("");
    [dataToArray[leftIndex], dataToArray[rightIndex]] = [
      dataToArray[rightIndex],
      dataToArray[leftIndex],
    ];

    this.data = dataToArray.join("");
  }
}
