const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

});

const booking = mongoose.model('Booking', bookingSchema);

module.exports = booking;
