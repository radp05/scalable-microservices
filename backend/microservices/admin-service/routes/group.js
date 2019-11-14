const express = require('express');
const config = require('../config/config');
const group = require('../controllers/group.controller')

module.exports = (() => {
    let router = express.Router();

    router.post(config.API_PREFIX + '/group', group.addGroup);
    router.patch(config.API_PREFIX + '/group', group.editGroup);
    router.get(config.API_PREFIX + '/groupAll', group.fetchGroupAll);
    router.delete(config.API_PREFIX + '/group/:groupId', group.removeGroup);

    return router;
})();




