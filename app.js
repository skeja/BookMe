const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./db');

const app = express();

const routes = require('./routes');

mongoose.connect('mongodb://localhost/bookme', { useMongoClient: true });
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.use((err, req, res) => {
  res.status(500).send(err.message);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});
