/**
 * @module :: Mongo db connection file
 */
const mongoose = require('mongoose');

const mongodbConnection = () => {
    return mongoose.connect('mongodb://localhost:27017/orderDb', { useNewUrlParser: true }, (err, any) => {
        if (err) {
            console.log("mongodb connection error", err);
            setTimeout(mongodbConnection, 5000);
        }
        console.log('mongodb connection started...........!');
    });
};

mongoose.connection.once('open', function() {
    console.debug('MongoDB connected');
    mongoose.connection.on('connected', function() {
        console.debug('MongoDB event connected');
    });
    mongoose.connection.on('disconnected', function() {
        console.error("mongodb is disconnected, quitting...");
    });
    mongoose.connection.on('reconnected', function() {
        console.debug('MongoDB event reconnected');
    });
});

mongoose.connection.on('error', function(err) {
    console.log('MongoDB event error.: ' + err);

});

module.exports.mongodbConnection = mongodbConnection;