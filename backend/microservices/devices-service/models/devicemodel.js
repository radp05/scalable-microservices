
var mongoose = require('mongoose')
const devicesSchema = new mongoose.Schema({
  device_name: { type: String, unique: true, required: true },
  device_type: { type: String ,required: true  },
  device_ip: { type: String ,required: true },
  date: { type: Date, default: Date.now }

});



var devices = mongoose.model("device", devicesSchema)
module.exports = devices