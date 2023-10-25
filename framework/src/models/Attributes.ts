export class Attributes<T extends object> {
  private userData: T;

  constructor(userData: T) {
    this.userData = userData;
  }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.userData[key];
  }

  set(updateProps: T): void {
    Object.assign(this.userData, updateProps);
  }

  getAllData(): T {
    return this.userData;
  }
}
