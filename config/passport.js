const bcrypt = require('bcrypt');
const winston = require('winston');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, Model) => {
  passport.use(new LocalStrategy((username, password, done) => {
    Model.User.findOne({
      where: {
        'username': username
      }
    }).then(user => {
      if (user == null) {
        return done(null, false, { message: 'Incorrect credentials.' })
      }
        
      var hashedPassword = bcrypt.hashSync(password, user.salt)
        
      if (user.password === hashedPassword) {
        return done(null, user)
      }
        
      return done(null, false, { message: 'Incorrect credentials.' })
    })
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id)
  });

  passport.deserializeUser((id, cb) => {
    Model.User.findOne({
      where: {
        'id': id
      }
    }).then(results) => {
      cb(null, results.rows[0])
    })
  });
}
