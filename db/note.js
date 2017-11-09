const { model, Schema } = require('mongoose');
const { ObjectId } = Schema.Types;

const noteSchema = new Schema({
  tite: {type: String, required: true},
  description: {type: String, required: true},
  authorId: { type: ObjectId, required: true }
});

module.exports = model('Note', noteSchema);
