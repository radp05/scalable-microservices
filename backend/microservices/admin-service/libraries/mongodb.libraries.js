//require mongoose module
var mongoose = require('mongoose');
const config = require('../config/config')
const commonConf = require('../../common/config.json');
const appConf = commonConf.services.admin;
let mongoConf = commonConf.databases.mongodb;
var logger = require('../logger')

appConf.port = appConf.port || config.PORT;
appConf.appName = appConf.appName || config.APP_NAME;

// Init dbConnection
if (config.LOCAL) mongoConf = {};
let dbUrl;
let dbConf = {
    "hostname": mongoConf.hostname || config.MONGO.hostname,
    "port": mongoConf.port || config.MONGO.port,
    "username": mongoConf.username || config.MONGO.username,
    "password": mongoConf.password || config.MONGO.password,
    "dbName": appConf.dbName || config.MONGO.dbName
};
if (dbConf.username != '' || dbConf.password != '') {
    dbUrl = `mongodb://${dbConf.username}:${dbConf.password}@${dbConf.hostname}:${dbConf.port}/${dbConf.dbName}`;
} else {
    dbUrl = `mongodb://${dbConf.hostname}:${dbConf.port}/${dbConf.dbName}`;
}



//export this function and imported by server.js
let connect = async () => {
    mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    mongoose.connection.on('connected', function () {
        logger.log({
            level: 'info',
            message: `Mongodb connected`
        });
    });

    mongoose.connection.on('error', function (err) {
        logger.log({
            level: 'error',
            message: `Mongodb connection error ${err}`
        });
    });

    mongoose.connection.on('disconnected', function () {
        logger.log({
            level: 'info',
            message: `Mongodb connection disconnected.`
        });
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log("Mongoose default connection is disconnected due to application termination");
            process.exit(0)
        });
    });

}

module.exports = {
    connect
}