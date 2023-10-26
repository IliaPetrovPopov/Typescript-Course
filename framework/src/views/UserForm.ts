import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#set-age": this.onSetAge,
      "click:#change-name": this.onSetName,
      "click:#save-user": this.onSave,
    };
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector("input");

    const name = input?.value;

    if (name) {
      this.model.set({ name });
    }
  };

  onSave = (): void => {
    this.model.save();
  };

  template(): string {
    return `
        <div>
            <input placeholder="${this.model.get("name")}" />
            <button id="change-name"> Change Name </button>
            <button id="set-age"> Set Random Age </button>
            <button id="save-user"> Save </button>
        </div>
        `;
  }
}
