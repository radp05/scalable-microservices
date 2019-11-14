
'use strict'

const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName: { type: String }
});

groupSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps

const group = mongoose.model('Group', groupSchema);
module.exports = group