const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  tite: { type: String, required: true },
  description: { type: String, required: true }
  // authorId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('Note', noteSchema);
