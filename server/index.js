const express = require("express");
const bodyParser = require("body-parser");
const passport=require('passport')
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

require('./auth'); 
app.use(passport.initialize());
app.use(passport.session());
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log('You are logged in!');
    console.log("Body", req.body);
    res.send(`Hello ${req.body.username}, your password is: ${req.body.password}`);
  });

app.listen(3000, () => {
  console.log("Started on PORT 3000");
});
