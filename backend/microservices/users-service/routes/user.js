const express = require('express');
const userController = require('../controllers/userController.js');
module.exports = (function () {
  var router = express.Router();

  router.patch('/details', userController.editUser)

  return router;

})();




