require('./api/config');

const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const routes = require('./api/routes');

const app = express();
app.use(compression());

let port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

routes(app);

app.listen(port, () => {
  console.log(chalk.green('API Running on Port ' + port));
})

module.exports = { app };


