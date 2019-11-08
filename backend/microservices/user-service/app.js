// Add module dependencies
const express = require('express');
const app = express();
// for swagger
// var subpath = express();
// var swagger = require('swagger-node-express').createNew(subpath);
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose')
//minimist is an argument parser required by swagger
//var argv = require('minimist')(process.argv.slice(2));

// Add custom dependencies
const config = require('./config/config');
const userRoutes = require('./routes/user');

//Add static dir
app.use(express.static('dist'));

// Init dbConnection
//useNewUrlParser:The MongoDB Node.js driver rewrote the tool it uses to parse MongoDB connection strings. Because this is such a big change, they put the new connection string parser behind a flag
//useUnifiedTopology : To use the new server discover and monitoring engine
//useFindAndModify : findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
mongoose.connect('mongodb://localhost/incedoDb', {
  useNewUrlParser: true ,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//swagger settings
// swagger.setApiInfo({
//   title: "devices API",
//   description: "API to perfprm crud operations on devices",
//   termsOfServiceUrl: "",
//   contact: "radhika.p@incedoinc.com",
//   license: "",
//   licenseUrl: ""
// });

//ensure the index.html file is avilable
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// });

// App Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//setting a swagger subpath to avoid route overlaps
//app.use("/v1", subpath);

//swagger
// Set api-doc path
//swagger.configureSwaggerPaths('', 'api-docs', '');

// Configure the API domain
// var domain = 'localhost';
// if (argv.domain !== undefined)
//   domain = argv.domain;
// else
//   console.log('No --domain=xxx specified, taking default hostname "localhost".')



// Set and display the application URL
// var applicationUrl = 'http://' + domain + ':' + config.PORT;
// console.log('snapJob API running on ' + applicationUrl);


// swagger.configure(applicationUrl, '1.0.0');

//swagger

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Header', 'X-Requested-With, content-type, Authorization');
  next();
});

app.use(cors());
app.use('/users', userRoutes);

// Run the microservice app
app.listen(config.PORT, () => {
  console.log(`${config.APP} is running on ${config.PORT} Port`);
});