const express = require('express');
const processDefinitionController = require('../controllers/process-definition.controller');
const deploymentController = require('../controllers/deployment.controller');

module.exports = (function () {
  const router = express.Router();

  // ========================= API index =================================

  router.get('/', processDefinitionController.index);

  // ==================== Process Definition APIs =========================

  router.get('/process-definition', processDefinitionController.getAll);
  router.get('/process-definition/:id', processDefinitionController.getOne);
  router.delete('/process-definition/:id', processDefinitionController.remove);


  // ==================== Deployment APIs =========================

  router.post('/deployment/create', deploymentController.deploy);

  return router;

})();
