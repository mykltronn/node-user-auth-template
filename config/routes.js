const winston = require('winston');
const authentication = require('../api/authentication');
const user = require('../api/user');
// const monitoring = require('../api/monitoring')

module.exports = (app, passport, db) => {
  // app.post('/api/login', passport.authenticate('local'), users.login)
  // app.post('/api/logout', users.logout)

  app.post('/api/login', passport.authenticate('local'), authentication.login);
  app.post('/api/logout', authentication.logout);

  app.post('/api/user', user.createUser);
  app.get('/api/user', user.getUsers);
  app.get('/api/user/:id', user.getUser);

  app.use(function (err, req, res, next) {
    if (err.message && (~err.message.indexOf('not found'))) {
      return next()
    }

    winston.error(err.stack)

    return res.status(500).json({ error: 'Error on backend occurred.' })
  });

  app.use(function (req, res) {
    const payload = {
      url: req.originalUrl,
      error: 'Not found'
    }
    if (req.accepts('json')) return res.status(404).json(payload)

    res.status(404).render('404', payload)
  });
};