const express = require('express');
const config = require('../config/config');
const resource = require('../controllers/resource.controller')

module.exports = (() => {
    let router = express.Router();

    router.post(config.API_PREFIX + '/resources', resource.addResource);
    router.patch(config.API_PREFIX + '/resources/:resourceId', resource.editResource);
    router.get(config.API_PREFIX + '/resources', resource.fetchResourceAll);
    router.delete(config.API_PREFIX + '/resources/:resourceId', resource.removeResource);

    return router;
})();




