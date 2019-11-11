//require mongoose module
var mongoose = require('mongoose');

//require database URL from properties file
var dbURL = "mongodb://localhost/demo";


//export this function and imported by server.js
let connect = async () => {
    mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    mongoose.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ", dbURL);
    });

    mongoose.connection.on('error', function (err) {
        console.log("Mongoose default connection has occured " + err + " error");
    });

    mongoose.connection.on('disconnected', function () {
        console.log("Mongoose default connection is disconnected");
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