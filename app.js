const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./db');

const app = express();

mongoose.connect('mongodb://localhost/bookme', { useMongoClient: true });
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.use((req, res, next) => res.sendStatus(404));

app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});
