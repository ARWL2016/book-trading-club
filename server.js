require('./api/config');

const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const helmet = require('helmet');
const ms = require('ms');

const routes = require('./api/routes');

const app = express();
app.use(compression());
app.use(helmet());

let port = process.env.PORT || 3000;
const staticOptions = process.env.NODE_ENV === 'production' ? {maxAge: ms('1yr')} : {};

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist'), staticOptions ));

routes(app);

// default route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
})

app.listen(port, () => {
  console.log(chalk.green('API Running on Port ' + port));
})

module.exports = { app };


