const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// MODULES
const db = require('../database');
const winston = require('./logger').winston;

passport.use(new LocalStrategy((username, password, done) => {
  db.query('SELECT id, username, password, type FROM users WHERE username=$1', [username], (err, result) => {
    if (err) {
      winston.error('Error when selecting user on login', err);
      return done(err);
    }

    if (result.rows.length > 0) {
      const first = result.rows[0];
      bcrypt.compare(password, first.password, function (err, res) {
        if (res) {
          done(null, { id: first.id, username: first.username, type: first.type })
        } else {
          done(null, false)
        }
      });
    } else {
      done(null, false)
    }
  });
}));


passport.serializeUser((user, done) => {
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  db.query('SELECT id, username, type FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
    if (err) {
      winston.error('Error when selecting user on session deserialize', err)
      return done(err)
    }

    done(null, results.rows[0])
  })
});