const bcrypt = require('bcrypt');
const config = require('../config/config')

let generateHashPasswword = async (params) => {
    let salt = bcrypt.genSaltSync(config.SALTROUND);
    let hash = bcrypt.hashSync(params.password, salt);
    return hash;
}

let validateHashPassword = (hashKey, password) => {
    return bcrypt.compareSync(myPlaintextPassword, hash)
}

module.exports = {
    generateHashPasswword,
    validateHashPassword
}