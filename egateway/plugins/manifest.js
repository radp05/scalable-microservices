module.exports = {
    version: '1.2.0',
    policies: ['egateway-logger'],
    init: function (pluginContext) {
        let policy = require('../policies/logger.policy');
        pluginContext.registerPolicy(policy);
    }
};
