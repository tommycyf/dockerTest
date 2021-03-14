"use strict";
// exports.handler = async (event) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify("Hello from Lambda! 2nd"),
//   };
//   return response;
// };
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    console.log(`helloworld: listening on port`);
    const name = process.env.NAME || "World";
    res.send(`Hello ${name}!`);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});
//# sourceMappingURL=index.js.map