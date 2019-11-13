
var mongoose = require('mongoose')
const deviceSchema = new mongoose.Schema({
  device_name: { type: String, unique: true, required: true },//deviceName
  device_type: { type: String ,required: true  },
  device_ip: { type: String ,required: true },
  date: { type: Date, default: Date.now }

});



var devices = mongoose.model("Device", deviceSchema)
module.exports = devices