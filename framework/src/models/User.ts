import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

type UserPropTypes = number | string;

export class User {
  private userData: UserProps;

  events: { [key: string]: Callback[] } = {};

  constructor(userData: UserProps) {
    this.userData = userData;
  }

  get(propName: string): UserPropTypes {
    return this.userData[propName];
  }

  set(updateProps: UserProps): void {
    Object.assign(this.userData, updateProps);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] ?? [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback: Callback) => {
      callback();
    });
  }

  fetch(): void {
    axios(`http://localhost:3000/users/${this.get("id")}`).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }
}
