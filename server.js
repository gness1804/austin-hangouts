const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'vars.env' });

const port = process.env.PORT || 3000;
const app = express();

// mongodb
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`There was an error connecting to the database: → ${err.message}`);
});
require('./api/models');

const routes = require('./api/routes');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);

app.locals.title = 'Austin Hangouts';

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${port}`);
});
