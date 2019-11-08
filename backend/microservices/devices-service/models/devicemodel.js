
var mongoose = require('mongoose')
const devicesSchema = new mongoose.Schema({
    device_name: {type: String},
    device_type: {type: String },
    date: { type: Date, default: Date.now }
   
  });
   

   
var devices = mongoose.model("device",devicesSchema)
 module.exports = devices