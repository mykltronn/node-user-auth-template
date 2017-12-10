const express = require('express')
const passport = require('passport')
const winston = require('winston')
const db = require('./database')

const port = process.env.PORT || 8000
const app = express()

require('./config/passport')(passport, db)
require('./config/express')(app, passport, db)
require('./config/routes')(app, passport, db)

const server = app.listen(port, () => {
  // if (app.get('env') === 'test') return

  winston.log('Express app started on port ' + port)
})

server.on('close', () => {
  winston.log('Closed express server')

  db.pool.end(() => {
    winston.log('Shut down connection pool')
  })
})
