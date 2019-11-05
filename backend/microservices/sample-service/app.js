// Add module dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Add custom dependencies
const config = require('./config/config');
const sampleRoutes = require('./routes/routes');

// Init dbConnection

// App Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type, Authorization');
    next();
});

app.use(cors());
app.use('/sample', sampleRoutes);

// Run the microservice app
app.listen(config.PORT, () => {
	console.log(`${config.APP} is running on ${config.PORT} Port`);
});