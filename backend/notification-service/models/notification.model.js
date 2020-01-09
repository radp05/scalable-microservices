
const mongoose = require('mongoose');
const uuid = require('node-uuid');


const notificationSchema = new mongoose.Schema({
    notificationId: {
        type: String, default: function genUUID() {
            return uuid.v1()
        }
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: false
    },
    userId: {
        type: String,
        ref: 'users'
    }
}, { timestamps: true });

const notification = mongoose.model("Notification", notificationSchema)

module.exports = notification