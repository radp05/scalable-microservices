

const Notification = require('../models/notification.model');

exports.insertNotification = async (data) => {
    let notification = new Notification();
    notification.message = data.message;
    notification.status = data.status;
    if(data.userId) {
        notification.userId = data.userId;
    }
    return await notification.save();
}

exports.fetchNotification = async () => {
    let notifications = await Notification.find();
    return notifications;
}

exports.fetchNotificationByLimit = async (userId, skip, limit) => {
    let notifications = await Notification.find({ userId: userId }).skip(skip).limit(limit);
    return notifications;
}