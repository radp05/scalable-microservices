
var mongoose = require('mongoose')
const authSchema = new mongoose.Schema({
    userName: {type: String},
    password: { type: String }
  },{timestamps: true});
     
var User = mongoose.model("users", authSchema);
module.exports = User