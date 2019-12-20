
var mongoose = require('mongoose')
const deviceSchema = new mongoose.Schema({
  deviceName: { type: String, unique: true, required: true },
  deviceType: { type: String, required: true },
  deviceIp: { type: String, required: true }
}, { timestamps: true });

var devices = mongoose.model("Device", deviceSchema)
module.exports = devices