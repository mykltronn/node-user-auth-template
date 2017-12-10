const winston = require('winston')
const authentication = require('../api/authentication')
const users = require('../app/users')
const monitoring = require('../app/monitoring')

module.exports = (app, passport, db) => {
  // app.post('/api/login', passport.authenticate('local'), users.login)
  // app.post('/api/logout', users.logout)

  app.post('/login', passport.authenticate('local'), authentication.login);
  app.post('/logout', authentication.logout);

  app.use(function (err, req, res, next) {
    if (err.message && (~err.message.indexOf('not found'))) {
      return next()
    }

    winston.error(err.stack)

    return res.status(500).json({ error: 'Error on backend occurred.' })
  })

  app.use(function (req, res) {
    const payload = {
      url: req.originalUrl,
      error: 'Not found'
    }
    if (req.accepts('json')) return res.status(404).json(payload)

    res.status(404).render('404', payload)
  })
}