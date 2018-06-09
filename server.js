
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);

app.locals.title = 'Austin Hangouts'

app.get('/', (request, response) => {
    response.send('');
});

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${port}`);
});

