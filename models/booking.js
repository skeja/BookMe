var mongoose = require("mongoose");

//// booking schema setup
var bookingSchema = new mongoose.Schema({

});

var booking = mongoose.model("Booking", bookingSchema);

module.exports = booking;