
'use strict'

const mongoose = require('mongoose');
const uuid = require('node-uuid');

const templateSchema = new mongoose.Schema({
    templateId: {
        type: String, default: function genUUID() {
            return uuid.v1()
        }
    },
    templateName: { type: String, required: true },
    templateJson: { type: JSON, required: true },
    status: {
        type: Boolean,
        default: true
    },
});

templateSchema.set('timestamps', true); // this will add createdAt and updatedAt timestamps

const Template = mongoose.model('Template', templateSchema);
module.exports = Template