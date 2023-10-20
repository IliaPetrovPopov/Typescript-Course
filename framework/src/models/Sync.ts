import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

interface HasID {
  id?: number;
}

export class Sync<T extends HasID> {
  constructor(private rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }
  // TS wants to know if <T> type will have id inside
  // but it is not provided, so I explicitly set constrains to <T>
  save(data: T): AxiosPromise {
    const id = data.id;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
