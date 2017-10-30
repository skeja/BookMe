const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  tite: String,
  description: String,
author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    username: String
  }
});

const note = mongoose.model('Note', noteSchema);

module.exports = note;
