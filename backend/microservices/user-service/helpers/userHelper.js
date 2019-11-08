const config = require("../config/config");
const bcrypt = require("bcrypt");
const createHashPassword = async password => {
    var salt = bcrypt.genSaltSync(config.ROUND_SALT);
    var hash = bcrypt.hashSync(password, salt);
     return hash;
};

export { createHashPassword };
