const bcrypt = require('bcrypt');

function hash(password) {
  return bcrypt.hash(password, 8);
}

module.exports = { hash };
