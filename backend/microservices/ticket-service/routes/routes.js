const express = require('express');
const ticketController = require('../controllers/ticket.controller');
module.exports = (function () {
  var router = express.Router();

  router.post('/add', ticketController.addTicket);
  router.get('/get', ticketController.getAllTickets);
  router.get('/get', ticketController.getRecord)
  router.patch('/update', ticketController.updateTicket)
  router.delete('/delete', ticketController.deleteTicket)

  return router;

})();