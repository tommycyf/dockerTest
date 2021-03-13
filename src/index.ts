import * as express from "express";

const app = express();

app.get("/", (_, res) =>
  res.json({
    message: "too difficult!",
  })
);

const port = 8080;

app.listen(port, () => console.log(`listening on port : ${port}`));
