"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(403).send("Not Permitted");
}
router.get("/", (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.status(200).send(`
  <div>
    <div>You are logged in</div>
    <a href="/logout">Logout</a>
  </div>`);
    }
    else {
        res.status(200).send(`
  <div>
    <div>You are not logged in</div>
    <a href="/login">Login</a>
  </div>`);
    }
});
router
    .route("/login")
    .get((req, res) => {
    res.status(200).send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>`);
})
    .post((req, res) => {
    const { email, password } = req.body;
    if (email && password && email === "hi@hi.com" && password === "12345") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password!");
    }
});
router.route("/logout").get((req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router
    .route("/protected")
    .get(requireAuth, (req, res) => {
    res.send("Welcome to protected route, logged in user!");
});
