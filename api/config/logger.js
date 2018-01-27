const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true,
      json: false,
      prettyPrint: true
    })
  ]
});

module.exports = { logger };
