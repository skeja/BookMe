const express = require('express');
const mongoose = require('mongoose');
require('./db');

const app = express();

const routes = require('./routes');

mongoose.connect('mongodb://localhost/bookme', { useMongoClient: true });

app.use(routes);

app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});
