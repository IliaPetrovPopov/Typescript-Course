import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

interface HttpBody {
  [key: string]: string | undefined;
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(403).send("Not Permitted");
}

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.status(200).send(`
  <div>
    <div>You are logged in</div>
    <a href="/logout">Logout</a>
  </div>`);
  } else {
    res.status(200).send(`
  <div>
    <div>You are not logged in</div>
    <a href="/login">Login</a>
  </div>`);
  }
});

router
  .route("/login")
  .get((req: Request<{}, {}, HttpBody>, res: Response) => {
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
  .post((req: Request<{}, {}, HttpBody>, res: Response) => {
    const { email, password } = req.body;

    if (email && password && email === "hi@hi.com" && password === "12345") {
      req.session = { loggedIn: true };

      res.redirect("/");
    } else {
      res.send("Invalid email or password!");
    }
  });

router.route("/logout").get((req: Request<{}, {}, HttpBody>, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router
  .route("/protected")
  .get(requireAuth, (req: Request<{}, {}, HttpBody>, res: Response) => {
    res.send("Welcome to protected route, logged in user!");
  });
export { router };
