const express = require('express');
const pdfController = require('../controllers/pdf.controller');
const excelController = require('../controllers/excel.controller');
const csvController = require('../controllers/csv.controller');
const textController = require('../controllers/text.controller');

module.exports = (function () {
  var router = express.Router();

  router.post('/pdf', pdfController.generatePdf);
  router.post('/excel', excelController.generateExcel);
  router.post('/csv', csvController.generateCSV);
  router.post('/text', textController.generateText);

  return router;

})();
