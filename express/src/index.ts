import express from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

const app = express();

app.use(cookieSession({ keys: ["laskdjasdasdf"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Go go go!");
});
