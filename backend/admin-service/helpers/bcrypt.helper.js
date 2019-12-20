const bcrypt = require('bcryptjs');
const saltRounds = 10;

exports.generatePassword = (password) => {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash
}