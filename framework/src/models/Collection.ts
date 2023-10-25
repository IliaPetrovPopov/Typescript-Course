import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection <T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    private rootUrl: string,
    public deserialize: (json: K) => T 
    ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.map((item: K) => {
        this.models.push(this.deserialize(item));
      });

      this.trigger("change");
    });
  }
}
