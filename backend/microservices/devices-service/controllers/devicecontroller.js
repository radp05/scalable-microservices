const mongoose = require('mongoose');
var Device = require('../models/devicemodel.js')

// Device model
//add object // exports object
exports.addDevice = async (req, res) => {
  try {
    var device = new Device({
      device_name: req.body.deviceName,
      device_type: req.body.deviceType,
      device_ip: req.body.deviceIP
    });
    let doc = await device.save();
    return res.status(200).json({
      message: "success",
      data: doc
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Error",
      error: error
    });
  }
}

exports.updateDevice = async (req, res) => {
  try {
    const filter = { device_name: req.body.deviceName };
    const update = { device_name: req.body.deviceName, device_type: req.body.deviceType, device_ip: req.body.deviceIP };
    let doc = await Device.findOneAndUpdate(filter, update, {
      new: true
    });
    if (doc == null) {
      return res.status(500).json({
        message: "No such device"
      });
    }
    return res.status(200).json({
      message: "Success",
      data: doc
    });
  }
  catch (error) {
    return res.status(500).json({
      message: "Internal Error",
      error: error
    });
  }
}

exports.deleteDevice = async (req, res) => {
  try {
    var device_name = req.body.deviceName
    await Device.findOneAndDelete({ device_name: req.body.deviceName }, function (err, data) {
      return res.status(200).json({
        message: "success"
      });
    })

  } catch (error) {
    return res.status(500).json({
      message: "Internal Error",
      error: error
    });
  }
}


exports.getAllDevices = async (req, res) => {
  var devices = await Device.find({}).select({ "_id": 0 });
  return res.status(200).json({
    message: "success",
    data: devices
  })
}




