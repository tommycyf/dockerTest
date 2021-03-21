"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exports.handler = async (event) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify("Hello from Lambda! 2nd"),
//   };
//   return response;
// };
const express = require("express");
const app = express();
const mysql = require("mysql");
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const connection = mysql.createConnection({
    host: "database-2.clfed5vokj6s.ap-northeast-1.rds.amazonaws.com",
    user: "admin",
    password: "11111111",
    database: "user",
});
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
    res.send(`Hello ${name}!`);
});
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});
app.get("/db", async (req, res) => {
    console.log("connecting db");
    connection.query("SELECT * FROM user_table", (error, results) => {
        console.log(results);
        res.json({ status: "success", body: results });
    });
});
app.post("/post", async (req, res) => {
    const data = {
        id: req.body.id,
        name: req.body.name,
    };
    console.log();
    console.log("posting to db");
    connection.query("INSERT INTO user_table VALUES (?,?)", Object.values(data), (error, results) => {
        console.log(results);
        console.log(error);
        res.json({ status: "POST SUCCESS", body: results });
    });
});
//# sourceMappingURL=index.js.map