// Var init
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const booking = require('./models/booking.js');
const user = require('./models/user.js');
const note = require('./models/user.js');

const indexRoutes = require('./routes');

mongoose.connect('mongodb://localhost/bookme', { useMongoClient: true });

app.use(indexRoutes);

app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});
