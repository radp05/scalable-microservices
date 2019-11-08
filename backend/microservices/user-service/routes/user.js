const express = require('express');
const userController = require('../controllers/userController');

module.exports = (function () {
  var router = express.Router();

  router.delete('/:id', userController.deleteUser);

  return router;

})();
