//// Var init

var express = require('express');
var app = express();
var mongoose = require("mongoose");

 //// Routes init
 var indexRoutes = require("./routes/index.js");
 
 //// Mongoose connect
 mongoose.connect('mongodb://localhost/bookme',{ useMongoClient: true });
 
 //// App setup
 app.set("view engine", "ejs");
 
 //// Routes config
 app.use(indexRoutes);
 

//// Port listening
app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});