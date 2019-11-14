const express = require('express');
const sampleController = require('../controllers/sample.controller');

module.exports = (function () {
  var router = express.Router();

  router.get('/', sampleController.index);
  router.get('/home', sampleController.home);

  return router;

})();
