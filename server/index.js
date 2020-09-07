const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport')
const app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const jwt = require('jsonwebtoken')
const User = require('./models/users')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

require('./auth');
app.post('/login',
  passport.authenticate('local'),
  function (req, res) {
    console.log('You are logged in!');
    res.send(`Hello ${req.body.username}, your password is: ${req.body.password}`);
  });
app.post('/register', (req, res) => {
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      if (!req.body.username || !req.body.password) {
        return res.send('Введите все данные')
      }
      console.error(err);
      res.send('Данное имя пользователя занято, выберите другое')
    } else {
      passport.authenticate('local')(req, res, () => {
        console.log('user authenticated');
        res.send('You are registed')
      })
    }
  })
})



app.listen(3000, () => {
  console.log("Started on PORT 3000");
});
