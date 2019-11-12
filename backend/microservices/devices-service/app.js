
// Add module dependencies
const express = require('express');
var fs = require('fs')
var path = require('path')
var morgan = require('morgan')
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose')


// Add custom dependencies
const config = require('./config/config');
const deviceRoutes = require('./routes/routes');

 var logDir = path.join(__dirname,'logs'); // directory path you want to set
 console.log(logDir)
// if (!fs.existsSync(logDir)) {
//   // Create the directory if it does not exist
//   fs.mkdirSync(logDir);
// }



// Init dbConnection
//useNewUrlParser:The MongoDB Node.js driver rewrote the tool it uses to parse MongoDB connection strings. Because this is such a big change, they put the new connection string parser behind a flag
//useUnifiedTopology : To use the new server discover and monitoring engine
//useFindAndModify : findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.
mongoose.connect(config.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

var accessLogStream = fs.createWriteStream(path.join(logDir, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


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
app.use('/devices', deviceRoutes);

// Run the microservice app
var server = app.listen(config.PORT, () => {
  console.log(`${config.APP} is running on ${config.PORT} Port`);
});

module.exports = server