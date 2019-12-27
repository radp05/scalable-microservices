const express = require('express');
const AuthController = require('../controllers/auth.controller');

module.exports = (function () {
  var router = express.Router();

  router.post('/login', AuthController.verifyUser);

  return router;

})();










