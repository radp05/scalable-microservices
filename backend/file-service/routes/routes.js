const express = require('express');
const pdfController = require('../controllers/pdf.controller');

module.exports = (function () {
  var router = express.Router();

  router.post('/pdf', pdfController.generatePdf);
  // router.post('/csv', sampleController.home);
  // router.post('/csv', sampleController.home);
  // router.post('/csv', sampleController.home);

  return router;

})();
