const morgan = require('morgan'),
      winston = require('winston');

const level = process.env.LOG_LEVEL || 'debug';

const err = morgan('dev', {
  skip: function (req, res) {
    return res.statusCode < 400
  }, stream: process.stderr
});

const log = morgan('dev', {
  skip: function (req, res) {
    return res.statusCode >= 400
  }, stream: process.stdout
});


const winston = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: level,
      timestamp: function () {
        return (new Date()).toISOString();
      }
    })
  ]
});

module.exports = {
  morgan: {
    err: err,
    log: log,
  },
  winston: winston,
}