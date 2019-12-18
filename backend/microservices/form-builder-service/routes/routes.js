const express = require('express');
const formBuilderController = require('../controllers/template.controller');
const configurationController = require('../controllers/configuration.controller');

module.exports = (function () {
  var router = express.Router();

  router.post('/template', formBuilderController.createTemplate);
  router.get('/template', formBuilderController.fetchTemplates);
  router.get('/template/:templateId', formBuilderController.fetchTemplatesById);
  router.delete('/template/:templateId', formBuilderController.deleteTemplates);
  router.patch('/template/:templateId', formBuilderController.updateTemplate);
  router.post('/configuration', configurationController.createConfiguration);
  return router;

})();
