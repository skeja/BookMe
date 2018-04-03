const bcrypt = require('bcrypt');
const saltRounds = 8;

function hash(password) {
  return bcrypt.hash(password, saltRounds);
}

module.exports = { hash };
