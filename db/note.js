const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
  // TODO: add user first then connect note with user
  // author: {
  //   id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User'
  //   },
  //   username: String
  // }
});

module.exports = mongoose.model('Note', noteSchema);
