const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.generatePassword = (password) => {
    var hash = bcrypt.hashSync(password, saltRounds);
    return hash
}