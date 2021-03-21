// exports.handler = async (event) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify("Hello from Lambda! 2nd"),
//   };
//   return response;
// };
const express = require("express");
const app = express();
const mysql = express("mysql");

const connection = mysql.createConnection({
  host: "database-2.clfed5vokj6s.ap-northeast-1.rds.amazonaws.com",
  user: "admin",
  password: "11111111",
  database: "user",
});
const port = process.env.PORT || 5000;

connection.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("success");
});

app.get("/", (req, res) => {
  console.log(`helloworld: listening on port`);
  const name = process.env.NAME || "World";
  connection.query("SELECT * FROM user_table", (error, results) => {
    console.log(results);
    res.render("hello.ejs");
  });
  res.send(results);
  // res.send(`Hello ${name}!`);
});

app.get("/db", async (req, res) => {
  console.log("connecting db");
  connection.query("SELECT * FROM user_table", (error, results) => {
    console.log(results);
    res.render("hello.ejs");
  });
});

app.get("/testroute", (req, res) => {
  console.log("connecting db");
  res.send("onnecting db");
  // connection.query("SELECT * FROM user_table", (error, results) => {
  //   console.log(results);
  //   res.render("hello.ejs");
  // });
});
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
