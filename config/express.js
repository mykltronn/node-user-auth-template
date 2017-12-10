const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const expressValidator = require('express-validator')
const session = require('express-session')
const pgSession = require('connect-pg-simple')(session)
const cookieParser = require('cookie-parser')
const morgan = require('./logger').morgan;
const winston = require('./logger').winston;
const config = require('./')

const env = process.env.NODE_ENV || 'development'

module.exports = (app, passport, pool) => {
  let log = 'dev'
  if (env !== 'development') {
    log = {
      stream: {
        write: message => winston.info(message)
      }
    }
  }

  if (env !== 'test') app.use(morgan(log));

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(expressValidator())
  app.use(session({
    store: new pgSession({
      pool
    }),
    secret: process.env.SESSION_SECRET || 'doughnut floaty',
    resave: false,
    saveUninitialized: false
  }))

  app.use(passport.initialize())
  app.use(passport.session())
}