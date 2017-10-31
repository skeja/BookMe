const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  tite: {type: String, required: true},
  description: {type: String, required: true},
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
        },
    username: String,
    required: true
  }
});

const note = mongoose.model('Note', noteSchema);

module.exports = note;
