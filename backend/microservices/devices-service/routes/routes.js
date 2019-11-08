const express = require('express');
const deviceController = require('../controllers/devicecontroller');
module.exports = (function () {
  var router = express.Router();

  router.post('/add', deviceController.addDevice);
  router.get('/get', deviceController.getAllDevices);
  router.patch('/update', deviceController.updateDevice)
  router.delete('/delete', deviceController.deleteDevice)

  return router;

})();




