import { AxiosPromise, AxiosResponse } from "axios";
import { Callback } from "./Eventing";

interface ModelAttributes<T> {
  set(update: T): void;
  getAllData(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface HasID {
  id?: number;
}

export class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on

  trigger = this.events.trigger;

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this?.get("id");

    if (!id) {
      throw new Error("Cannot fetch without id of user");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.attributes.getAllData();
    this.sync
      .save(id)
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
