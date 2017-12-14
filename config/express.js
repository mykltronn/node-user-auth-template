const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const expressValidator = require('express-validator')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const cookieParser = require('cookie-parser')
const morgan = require('./logger').morgan;
const winston = require('./logger').winston;
const config = require('./')

const env = process.env.NODE_ENV || 'development'

module.exports = (app, passport, db) => {
  let log = 'dev'
  if (env !== 'development') {
    log = {
      stream: {
        write: message => winston.info(message)
      }
    }
  }

  if (env !== 'test') app.use(morgan.log);

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(expressValidator())
  app.use(session({
    store: new SequelizeStore({
      db: db.sequelize
    }),
    secret: process.env.SESSION_SECRET || 'doughnut floaty',
    resave: false,
    saveUninitialized: false
  }))

  app.use(passport.initialize())
  app.use(passport.session())
}