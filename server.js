const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'vars.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`There was an error connecting to the database: → ${err.message}`);
});
// require('./api/models');

const app = express();
const port = process.env.PORT || 3000;
// const routes = require('./api/routes');

// routes(app);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);

app.locals.title = 'Austin Hangouts';

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${port}`);
});
