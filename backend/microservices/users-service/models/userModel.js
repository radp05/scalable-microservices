
var mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  email: { type: String },
  status: { type: Number },
  password: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedOn: { type: Date },
  updatedBy: { type: String },
  createdBy: { type: String }
})

var users = mongoose.model("users",userSchema)
module.exports = users