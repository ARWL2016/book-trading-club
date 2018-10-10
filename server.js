require('./api/config');

// third party libs
const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const expressEnforcesSsl = require('express-enforces-ssl');
const ms = require('ms');

// local
const { logger } = require('./api/config/logger');

// import routes
const bookRoutes = require('./api/books/book.routes');
const authRoutes = require('./api/auth/auth.routes');
const requestRoutes = require('./api/request/request.routes');

const port = process.env.PORT || 3000;
const staticOptions = process.env.NODE_ENV === 'production' ?
        { maxAge: ms('1yr') } : {};
const app = express();

// configure app
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    connectSrc: ["'self'", 'https://www.googleapis.com'],
    scriptSrc: ["'self'", "'unsafe-eval'"],
    styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
    imgSrc: ["'self'", 'http://books.google.com'],
    fontSrc: ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com']
  }
}));
if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy');
  app.use(expressEnforcesSsl());
  app.use(helmet.hsts({
    maxAge: ms('1 year'),
    includeSubdomains: true
  }));
  app.use(compression());
}
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist'), staticOptions));

// load routes
bookRoutes(app);
authRoutes(app);
requestRoutes(app);

// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// handle errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  logger.info('API Running on Port ' + port);
});

module.exports = { app };
