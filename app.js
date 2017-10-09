//// Var init

var express = require('express');
var app = express();


 //// Routes init
 var indexRoutes = require("./routes/index.js");
 
 
 //// App setup
 app.set("view engine", "ejs");
 
 //// Routes config
 app.use(indexRoutes);
 

//// Port listening
app.listen(process.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});