const mongoose = require('mongoose');
var Device = require('../models/device.model')
var logger = require('../loggers/logger').logger

exports.addDevice = async (req, res) => {
  try {
    var device = new Device({
      deviceName: req.body.deviceName,
      deviceType: req.body.deviceType,
      deviceIp: req.body.deviceIp
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
    const filter = { _id: req.body._id };
    const update = { deviceName: req.body.deviceName, deviceType: req.body.deviceType, deviceIp: req.body.deviceIp };
    let doc = await Device.findOneAndUpdate(filter, update, {
      new: true
    });
    if (doc == null) {
      return res.status(404).json({
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
    logger.info("deleteDevice", req.body)
    var deviceName = req.body.deviceName
    await Device.findOneAndDelete({ deviceName: req.body.deviceName }, function (err, data) {
      return res.status(200).json({
        message: "success"
      });
    })

  }
  catch (error) {
    return res.status(500).json({
      message: "Internal Error",
      error: error
    });
  }
}

exports.getAllDevices = async (req, res) => {
  try {
    var devices = await Device.find({});
    return res.status(200).json({
      message: "success",
      data: devices
    })
  }
  catch (error) {
    return res.status(500).json({
      message: "Internal Error",
      error: error
    });
  }

}

exports.getRecord = async (req, res) => {
  try {
    var devices = await Device.findOne({ deviceName: req.query.deviceName });
    return res.status(200).json({
      message: "success",
      data: devices
    })
  }
  catch (error) {
    return res.status(500).json({
      message: "Internal Error",
      error: error
    });
  }

}


