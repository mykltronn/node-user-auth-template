const bcrypt = require('bcrypt');
const passport = require('passport');
const winston = require('winston');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (db) => {
  passport.use(new LocalStrategy((username, password, done) => {
    db.User.findOne({
      where: {
        'username': username
      }
    }).then(response => {
      const user = response.dataValues;
      console.log('user is: ', user);
      if (user == null) {
        return done(null, false, { message: 'Incorrect credentials.' })
      }
      console.log('password const is: ', password);
      console.log('user.password is: ', user.password);
      const isMatch = bcrypt.compareSync(password, user.password);
      console.log('password match?', isMatch);
      // const hashedPassword = bcrypt.hashSync(password, salt)
        
      if (isMatch) {
        console.log('IS MATCH, SON')
        return done(null, user)
      }
        
      return done(null, false, { message: 'Incorrect credentials.' })
    })
  }));

  passport.serializeUser((user, done) => {
    console.log('trying to deserialize user with user: ', user)
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    console.log('trying to deserialize user with id: ', id)
    db.User.findOne({
      where: {
        'id': id
      }
    }).then(user => {
      if (user == null) {
        done(winston.error('Wrong user id.'))
      }
      
      done(null, user)
    })
  })
}
