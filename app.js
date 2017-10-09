//// Var init

var express = require('express');
var app = express();



//// Port listening
app.listen(proccess.env.PORT || 3000, function () {
  console.log('App running on port 3000!');
});