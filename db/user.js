const mongoose = require('mongoose');
const { hash } = require('../middleware/middleware');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false }
});

userSchema.pre('save', async function (next) {
  this.password = await hash(this.password);
  next();
});

userSchema.pre('update', async function (next) {
  this.password = await hash(this.password);
  next();
});

Object.assign(userSchema.methods, {
  validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
});

module.exports = mongoose.model('User', userSchema);
