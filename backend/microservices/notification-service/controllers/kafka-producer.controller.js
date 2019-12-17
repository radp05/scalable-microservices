const kafka = require('kafka-node');
const Producer = kafka.Producer;
const config = require('../config/config');

exports.saveMessage = (req, res) => {
    const client = new kafka.KafkaClient(config.KAFKA_SERVER_URL);
    const producer = new Producer(client);
    try {
        const message = JSON.stringify(req.body.message);
        const topic = req.body.userId || 'allMessages';
        let payloads = [{ topic: topic, messages: message }];

        producer.on('ready', async function () {
            producer.createTopics([topic], (error, result) => {
                if (!error) {
                    producer.send(payloads, (err, data) => {
                        if (!err) {
                            res.status(200).json({ message: req.body.message });
                            producer.close();
                            client.close();
                            console.log(data);
                        } else {
                            res.status(400).json({ message: req.body.message });
                            producer.close();
                            client.close();
                            console.log(err);
                        }
                    });
                } else {
                    res.statu(500).json({ message: 'topic not created' });
                    producer.close();
                    client.close();
                }
            });
        });

        producer.on('error', function (err) {
            console.log('error... ', err);
            res.status(500).json({ error: err });
            producer.close();
            client.close();
        });
    }
    catch (error) {
        res.status(500).json({ error: error });
        producer.close();
        client.close();
    }
}