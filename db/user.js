const mongoose = require('mongoose');
const { hash } = require('../middleware/middleware');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false }
});

userSchema.pre('save', function (next) {
  const password = this.password;
  hash(password).then(hash => {
    this.password = hash;
  next();
  });
  });

userSchema.pre('update', function (next) {
  const password = this.password;
  hash(password).then(hash => {
    this.password = hash;
  next();
  });
  });

Object.assign(userSchema.methods, {
  validPassword(password, cb) {
    bcrypt.compare(password, this.password, cb);
  }
});

module.exports = mongoose.model('User', userSchema);
