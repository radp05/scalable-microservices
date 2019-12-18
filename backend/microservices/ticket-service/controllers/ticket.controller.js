
const helpers = require('../helpers/ticket.helper')

exports.addTicket= async (req, res) => {
  console.log("Entered addTicket backend")
  let result = await helpers.insertTicket(req.body.ticketType, req.body.reportedBy, req.body.version,req.body.site,req.body.resolutionType,req.body.priority,req.body.description)
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

exports.updateTicket = async (req, res) => {
  let result = await helpers.update(req.body.ticketId, req.body.resolutionType, req.body.description)
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

exports.deleteTicket = async (req, res) => {
  let result = await helpers.delete(req.body.ticketId)
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

exports.getAllTickets = async (req, res) => {
  console.log("Entered getAllTickets backend")
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
  console.log("Entered getRecord backend")
  let result = await helpers.getRecord(req.query.ticketId)
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