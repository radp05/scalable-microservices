
'use strict'

const mongoose = require('mongoose');

var configurationSchema =new mongoose.Schema({
},{ strict: false });
configurationSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps


const Configuration = mongoose.model('Configuration', configurationSchema);
module.exports = Configuration