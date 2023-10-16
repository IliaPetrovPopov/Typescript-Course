import { faker } from "@faker-js/faker";
import { MappableItem } from "./CustomMap";

export class User implements MappableItem {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "green";

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `Username is: ${this.name}`;
  }
}
