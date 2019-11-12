const express = require('express');
const userController = require('../controllers/userController.js');

module.exports = (function () {
  var router = express.Router();

  router.get('/', userController.home);
  router.patch('/details', userController.editUser);
  router.delete('/:id', userController.deleteUser);

  return router;

})();




