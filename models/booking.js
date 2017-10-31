const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    username: String,
    required: true
  },
  startDate: {type: Date, required: true},
  endDate: {type: Date, required: true},
  price: {type: Number, required: true, min: 0.01},
  origin: {type: String, required: true},
  guests: {type: Number, required: true, min: 1},
  nation: {type: String}
});

const booking = mongoose.model('Booking', bookingSchema);

module.exports = booking;
