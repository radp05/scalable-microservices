const mongoose = require('mongoose');
var Device = require('../models/devicemodel.js')

// Device model

exports.addDevice = async (req, res) => {
  try {
    var device = new Device({
      device_name: req.body.deviceName,
      device_type: req.body.deviceType
    });
    await device.save();
    return res.status(200).json({
      message: "success"
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
    const update = { device_name: req.body.deviceName, device_type: req.body.deviceType };
    let doc = await Device.findOneAndUpdate(filter, update, {
      new: true
    });
    return res.status(200).json({
      message: doc
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
  var devices = await Device.find();
  return res.status(200).json({
    message: "success",
    data: devices
  })
}




