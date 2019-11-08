const express = require('express');
const sampleController = require('../controllers/sample.controller');

module.exports = (function () {
  var router = express.Router();

  router.get('/', sampleController.home);
  router.delete('/:id', sampleController.deleteUser);

  return router;

})();
