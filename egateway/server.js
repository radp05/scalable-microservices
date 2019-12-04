const path = require('path');
const gateway = require('express-gateway');

process.env.EG_DISABLE_CONFIG_WATCH = false;

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
