const kafka = require('kafka-node');
const Consumer = kafka.Consumer;

const notificationHelper = require('../helpers/notification.helper');


exports.messageByUserId = (req, res) => {

    const userId = req.params.userId;
 
    const client = new kafka.KafkaClient(process.env.ZOOKEEPER_URL);
    const consumer = new Consumer(client, [{ topic: userId }], { autoCommit: false, fromOffset: 'latest' });

    consumer.on('message', async (message) => {
        const notifications = await notificationHelper.fetchNotificationByLimit(userId, 0, 10);
        res.write('data: ' + JSON.stringify([...notifications])+ "\n\n");
    });
    consumer.on('error', function (err) {
        console.log('Error:', err);
    });

    consumer.on('offsetOutOfRange', function (err) {
        console.log('offsetOutOfRange:', err);
    });
}

exports.messageForAdmin = (req, res) => {
    const userId = req.params.userId;

    const client = new kafka.KafkaClient(process.env.ZOOKEEPER_URL);
    const consumer = new Consumer(client, [{ topic: userId }], { autoCommit: false, fromOffset: 'latest' });

    consumer.on('message', function (message) {
        console.log('message: ', message.value);
        res.write('data: ' + JSON.stringify(message.value)+ "\n\n");
    });
    consumer.on('error', function (err) {
        console.log('Error:', err);
    });

    consumer.on('offsetOutOfRange', function (err) {
        console.log('offsetOutOfRange:', err);
    });
}

exports.allMessages = (req, res) => {

    const client = new kafka.KafkaClient(process.env.ZOOKEEPER_URL);
    const consumer = new Consumer(client, [{ topic: 'allMessages' }], { autoCommit: false, fromOffset: 'latest' });

    consumer.on('message', function (message) {
        console.log('message: ', message.value);
        res.write('data: ' + JSON.stringify(message.value)+ "\n\n");
    });
    consumer.on('error', function (err) {
        console.log('Error:', err);
    });

    consumer.on('offsetOutOfRange', function (err) {
        console.log('offsetOutOfRange:', err);
    });
}

exports.fetchAllNotification = async (req, res) => {
    const notifications = await notificationHelper.fetchNotification();
    res.status(200).json({ "data": { 'notifications': notifications} })
}