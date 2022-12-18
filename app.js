const express = require("express");

const fs = require("fs");

const path = require("path");

const app = express();

const port = 3000;

const host = "127.0.0.1";

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});
// localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    `<form action="/store-user" method="POST">
      <label>Your Name</label>
      <input type="text" name="username">
      <button>Submit</button>
    </form>`
  );
});
// localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);

  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!</h1>");
});

app.listen(port, console.log(`Running server on https://${host}:${port}`));
