
const orderController = require('../controllers/auth.controller');
const express = require('express');
const fs = require('fs');
const AuthController = require('../controllers/auth.controller');

module.exports = (function () {
  var router = express.Router();

  router.post('/login', AuthController.verifyUser);

  return router;

})();










