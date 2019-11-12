// Add module dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongodb = require('./models/MongoDB')

// Add custom dependencies
const config = require('./config/config');
const userRoutes = require('./routes/user');

// Init dbConnection

// App Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type, Authorization');
    res.setTimeout(300000,function(){
        res.status(408).json({success:false, message:"Request has timed out."})
    })
    next();
});
app.use(cors());
app.use(helmet.noCache())
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());


// Add service routes
app.use('/user', userRoutes);

// Hanlde uncaughtExceptions here to prevent termination
process.on('uncaughtException', (error) => {
    console.log(error);
});

//make database connection
mongodb.connect();

// Run the microservice app
app.listen(config.PORT, () => {
	console.log(`${config.APP} is running on ${config.PORT} Port`);
});