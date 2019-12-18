const path = require('path');
const gateway = require('express-gateway');
const settings = require('../common/config.json');

console.log(settings);
process.env.JWT_SECRET = settings.JWT_SECRET;
process.env.EG_DISABLE_CONFIG_WATCH = false;

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
