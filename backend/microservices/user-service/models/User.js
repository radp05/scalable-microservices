
var mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    userId: {type: Number},
    userName: {type: String },
    password: {type: String},
    firstName: {type: String },
    middleName: {type: String},
    lastName: {type: String },
    email: {type: String},
    roleId: {type: Number },
    isLoggedIn: {type: Number },
    groupResourceId: {type: Number },
    status: {type: Number, default: 1 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdBy: {type: String},
    updatedBy: {type: String}
   
  });
   

   
var users = mongoose.model("user",usersSchema)
 module.exports = users