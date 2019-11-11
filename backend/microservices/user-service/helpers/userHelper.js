const config = require("../config/config");
const bcrypt = require("bcrypt");
let jwt = require('jsonwebtoken');

const createHashPassword = async password => {
    var salt = bcrypt.genSaltSync(config.SALT_ROUND);
    var hash = bcrypt.hashSync(password, salt);
     return hash;
};

const createToken=async user=>{
    var token = jwt.sign({ id:user.id  }, process.env.PRIVATE_KEY || config.PRIVATE_KEY);
    return token;
}

const comparePassword=async(password,user)=>{
    return await bcrypt.compare(password, user.password);
}

export { createHashPassword,createToken,comparePassword };
