import { APISync } from "./APISync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs), 
      new Eventing(),
      new APISync<UserProps>(rootUrl)
      );
  }

  static buildCollection(): Collection<User, UserProps> {
    return new Collection <User, UserProps>
    (
        rootUrl,
        (json: UserProps) => User.buildUser(json)
    );
  } 
}

const user = User.buildUser({});
user.get("name")
