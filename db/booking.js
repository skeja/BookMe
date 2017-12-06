const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // TODO: add user first then connect booking with user
  // authorId: { type: mongoose.Schema.Types.ObjectId, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, required: true, min: 0.01 },
  origin: { type: String, required: true, enum: ['Booking', 'Airbnb', 'Other'] },
  guests: { type: Number, required: true, min: 1 },
  nation: { type: String }
});

module.exports = mongoose.model('Booking', bookingSchema);
