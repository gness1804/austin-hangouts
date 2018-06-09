const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const routes = require('./api/routes');

// mongodb
// const Place = require('./api/models');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Placedb');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);

app.locals.title = 'Austin Hangouts';

routes(app);

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${port}`);
});
