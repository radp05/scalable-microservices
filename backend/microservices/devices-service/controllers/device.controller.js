
const helpers = require('../helpers/device.helper')


exports.addDevice = async (req, res) => {
  let result = await helpers.insertDevice(req.body.deviceName, req.body.deviceType, req.body.deviceIp)
  if (result.status) {
    return res.status(200).json({
      message: "success",
      data: result.data
    });
  }
  else {
    return res.status(500).json({
      message: "Internal Error",
      error: result.data
    });
  }
}

exports.updateDevice = async (req, res) => {
  let result = await helpers.update(req.body._id, req.body.deviceName, req.body.deviceType, req.body.deviceIp)
  if (result.status) {
    console.log(result.data)
    if (result.data != null) {
      return res.status(200).json({
        message: "Success",
        data: result.data
      });
    }
    return res.status(404).json({
      message: "No such device"
    });

  }
  return res.status(500).json({
    message: "Internal Error",
    error: result.data
  });
}

exports.deleteDevice = async (req, res) => {
  let result = await helpers.delete(req.body._id)
  if (result.status) {
    if (result.data != null) {
      return res.status(200).json({
        message: "success"
      });
    }
    return res.status(404).json({
      message: "No such device"
    });

  }
  return res.status(500).json({
    message: "Internal Error",
    error: result.data
  });
}

exports.getAllDevices = async (req, res) => {
  let result = await helpers.list()
  if (result.status) {
    return res.status(200).json({
      message: "success",
      data: result.data
    })
  }
  return res.status(500).json({
    message: "Internal Error",
    error: result.data
  })
}

exports.getRecord = async (req, res) => {
  let result = await helpers.getRecord(req.query._id)
  if (result.status) {
    return res.status(200).json({
      message: "success",
      data: result.data
    })
  }
  return res.status(500).json({
    message: "Internal Error",
    error: result.data
  })
}


