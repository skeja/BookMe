const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
  // TODO: add user first then connect note with user
  // authorId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('Note', noteSchema);
