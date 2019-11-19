
'use strict'

const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    resourceName: { type: String , unique: true }
});

resourceSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps

const resource = mongoose.model('Resources', resourceSchema);
module.exports = resource