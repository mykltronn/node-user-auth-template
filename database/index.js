const pg = require('pg');
const winston = require('../config/logger').winston;

const dbConfig = process.env.DATABASE_URL || 'postgres://mykltronn:null@localhost/proteus-dev';

const pool = new pg.Pool(dbConfig)
pool.on('error', function (err) {
  winston.error('idle client error', err.message, err.stack)
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}
