const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.post("/login", (req, res) => {
  console.log("Body", req.body);
  res.send(`Hello ${req.body.user}, your password is: ${req.body.password}`);
});

app.listen(3000, () => {
  console.log("Started on PORT 3000");
});
