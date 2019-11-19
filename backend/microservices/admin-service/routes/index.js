var express = require('express');
var router = express.Router();

var user = require("./user");
var group = require("./group")
var resource = require('./resource')

router.use(user);
router.use(resource);
router.use(group);

module.exports = router