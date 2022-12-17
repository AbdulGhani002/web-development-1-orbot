const express = require("express");

const app = express();

const port = 3000;

const host = "127.0.0.1";

app.use("/currenttime", function (req, res) {
  res.send(`<h1>Hello, Current time is ${new Date().toISOString()}</h1>`);
});

app.use("/", function (req, res) {
  res.send(`<h1>Hello World</h1>`);
});

app.listen(port, console.log(`Running server on https://${host}:${port}`));
