// const app = require("express")();

// app.get("/", (_, res) =>
//   res.json({
//     message: "too difficult!",
//   })
// );

// const port = process.env.PORT || 8080;

// app.listen(port, () =>
//   console.log(`listening on port : http://localhost:${port}`)
// );

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
