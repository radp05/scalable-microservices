
'use strict'

const mongoose = require('mongoose');
const uuid = require('node-uuid');

var configurationSchema =new mongoose.Schema({
    configurationId: {
        type: String, default: function genUUID() {
            return uuid.v1()
        }
    }
},{ strict: false }
);
configurationSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps


const Configuration = mongoose.model('Configuration', configurationSchema);
module.exports = Configuration