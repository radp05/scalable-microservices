const express = require('express');
const config = require('../config/config');
const group = require('../controllers/group.controller')

module.exports = (() => {
    let router = express.Router();

    router.post(config.API_PREFIX + '/groups', group.addGroup);
    router.patch(config.API_PREFIX + '/groups/:groupId', group.editGroup);
    router.get(config.API_PREFIX + '/groups', group.fetchGroupAll);
    router.delete(config.API_PREFIX + '/groups/:groupId', group.removeGroup);

    return router;
})();




