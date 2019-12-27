const kafka = require('kafka-node');
const config = require('../config/config');
const Consumer = kafka.Consumer;


exports.messageByUserId = (req, res) => {

    const userId = req.params.userId;
 
    const client = new kafka.KafkaClient(config.KAFKA_SERVER_URL);
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

exports.messageForAdmin = (req, res) => {
    const userId = req.params.userId;

    const client = new kafka.KafkaClient(config.KAFKA_SERVER_URL);
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

    const client = new kafka.KafkaClient(config.KAFKA_SERVER_URL);
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