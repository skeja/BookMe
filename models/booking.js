const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    username: String
  },
  startDate: Date,
  endDate: Date,
  price: Number,
  origin: String,
  guests: Number,
  nation: String
});

const booking = mongoose.model('Booking', bookingSchema);

module.exports = booking;
