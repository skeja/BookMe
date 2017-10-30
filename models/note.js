const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  tite: String,
  description: String,
  author: String
});

const note = mongoose.model('Note', noteSchema);

module.exports = note;
