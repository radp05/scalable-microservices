
'use strict'

var mongoose = require('mongoose');
var uuid = require('node-uuid');

const resourceSchema = new mongoose.Schema({
    // resourceId: {
    //     type: String, default: function genUUID() {
    //         return uuid.v1()
    //     }
    // },
    resourceId: { type: String, unique: true },
    resourceName: { type: String, unique: true },
    status: {
        type: Boolean,
        default: true
    }
});

resourceSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps

const resource = mongoose.model('Resources', resourceSchema);
module.exports = resource