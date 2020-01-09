var CryptoJS = require("crypto-js");
const config = require('../config/config.js');

exports.generatePassword = (password) => {
    const hash = CryptoJS.AES.encrypt(JSON.stringify(password), config.SECRET_KEY);
    return hash
}