import { Collection } from "./models/Collection";
import { User, UserProps, rootUrl } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Collection(rootUrl, (json: UserProps) => {
  return User.buildUser(json);
});

users.on("change", () => {
  const root = document.querySelector("#root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
