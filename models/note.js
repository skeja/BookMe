const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({

});

const note = mongoose.model("Note", noteSchema);

module.exports = note;