"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
app.use((0, cookie_session_1.default)({ keys: ["laskdjasdasdf"] }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(loginRoutes_1.router);
app.listen(3000, () => {
    console.log("Go go go!");
});
