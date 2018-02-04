require('./api/config');

// third party libs
const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
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
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist'), staticOptions ));


// load routes
bookRoutes(app);
authRoutes(app);
requestRoutes(app);


// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});


app.listen(port, () => {
  logger.info('API Running on Port ' + port);
});

module.exports = { app };
