const { model, Schema } = require('mongoose');
const { ObjectId } = Schema.Types;

const noteSchema = new Schema({
  tite: {type: String, required: true},
  description: {type: String, required: true},
  author: {
    id: {
      type: ObjectId,
      ref: 'user'
        }
      }
});

module.exports = model('Note', noteSchema);
