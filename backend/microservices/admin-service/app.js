// Add module dependencies
const express = require("express");
const app = express();
const z = require("babel-register")({
    presets: ["es2015", "stage-2"]
});
require("babel-core/register");
require("babel-polyfill");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/config");
const bodyParser = require('body-parser');
const mongodb = require('./libraries/mongodb.libraries')
const logger = require('./helpers/winston.helper')
const userRoutes = require('./routes/user')
const resourceRoutes = require('./routes/resource')
const groupRoutes = require('./routes/group')

// Add custom dependencies

// App Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type, Authorization');
    res.setTimeout(300000, function () {
        res.status(408).json({ success: false, message: "Request has timed out." })
    })
    next();
});
app.use(cors());
app.use(helmet.noCache());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());

//Add routes 

app.use(userRoutes);
app.use(resourceRoutes);
app.use(groupRoutes);

// Hanlde uncaughtExceptions here to prevent termination
process.on('uncaughtException', (error) => {
    logger.log({
        level: 'error',
        message: error.message
    });
});

//make database connection
mongodb.connect();

// Run the microservice app
app.listen(config.PORT, () => {
    logger.log({
        level: 'info',
        message: `${config.APP} is running on ${config.PORT} Port`
    });
});
