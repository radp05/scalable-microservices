
'use strict'

const mongoose = require('mongoose');
const uuid = require('node-uuid');

const groupSchema = new mongoose.Schema({
    groupId: {
        type: String, default: function genUUID() {
            uuid.v1()
        }
    },
    groupName: { type: String, required: true },
    resourceIds: { type: Array, required: true }
});

groupSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps

const group = mongoose.model('Group', groupSchema);
module.exports = group