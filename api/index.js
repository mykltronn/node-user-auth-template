const app = require('express')();
const passport = require('passport');
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET || 'doughnut floaty',
  resave: false, 
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());