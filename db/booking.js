const { model, Schema } = require('mongoose');
const { ObjectId } = Schema.Types;

const bookingSchema = new Schema({
  authorId: { type: ObjectId, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, required: true, min: 0.01 },
  origin: { type: String, required: true },
  guests: { type: Number, required: true, min: 1 },
  nation: { type: String }
});

module.exports = model('Booking', bookingSchema);
