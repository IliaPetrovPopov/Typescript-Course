import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserForm } from "./views/UserForm";

const rootElement = document.querySelector("#root") as HTMLElement;

const user = User.buildUser({ age: 18, name: "Anthony" });

if(rootElement) {
    const userEdit = new UserEdit(rootElement, user);

    userEdit.render();

    console.log(userEdit.regions);
    
}

// userForm.render();
