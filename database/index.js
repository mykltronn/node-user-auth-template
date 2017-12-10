const pg = require('pg')
const config = require('../config')
const winston = require('winston')

const Sequelize = require('sequelize'),
  db = new Sequelize(config.db)

module.exports = db;