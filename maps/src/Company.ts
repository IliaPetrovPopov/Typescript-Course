import { faker } from "@faker-js/faker";
import { MappableItem } from "./CustomMap";

export class Company implements MappableItem{
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
        <div>
            <h2>Company name: ${this.name}</h2>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>`;
  }
}
