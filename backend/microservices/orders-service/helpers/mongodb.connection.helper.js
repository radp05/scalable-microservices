/**
 * @module :: Mongo db connection file
 */
const mongoose = require('mongoose');
const logger = require('./logger.helper');

const mongodbConnection = () => {
    return mongoose.connect('mongodb://localhost:27017/orderDb', { useNewUrlParser: true }, (err, any) => {
        if (err) {
            logger.debug("mongodb connection error", err);
            setTimeout(mongodbConnection, 5000);
        }
        logger.info('mongodb connection started...........!');
    });
};

mongoose.connection.once('open', function() {
    logger.info('MongoDB connected');
    mongoose.connection.on('connected', function() {
        logger.info('MongoDB event connected');
    });
    mongoose.connection.on('disconnected', function() {
        logger.info("mongodb is disconnected, quitting...");
    });
    mongoose.connection.on('reconnected', function() {
        console.info('MongoDB event reconnected');
    });
});

mongoose.connection.on('error', function(err) {
    logger.debug('MongoDB event error.: ' + err);

});

module.exports.mongodbConnection = mongodbConnection;