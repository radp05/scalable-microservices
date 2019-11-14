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
const swaggerUi = require('swagger-ui-express');
//const mongoose = require("mongoose");
// Add custom dependencies
const config = require("./config/config");
const userRoutes = require("./routes/user");
const groupRoutes=require("./routes/group")
const commonConf = require('./../common/config.json');
const appConf = commonConf.services.user;

// Init dbConnection
// mongoose.connect("mongodb://localhost/user_db", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });
const bodyParser = require('body-parser');
const mongodb = require('./models/MongoDB')

// Add custom dependencies

// Init dbConnection
mongodb.connect();

// App Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Header",
    "X-Requested-With, content-type, Authorization"
  );
  res.setTimeout(300000, function() {
    res.status(408).json({ success: false, message: "Request has timed out." });
  });
  next();
});
app.use(cors());
app.use(helmet.noCache());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());

// Add service routes
app.use(userRoutes);
app.use(groupRoutes);

// Add swagger api-docs
const swaggerDocument = require('./swagger.json');
const options = {
     customCss: '.swagger-ui .topbar { display: none }'
};
app.use(`${appConf.apiBase}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
//swagger

// Hanlde uncaughtExceptions here to prevent termination
process.on("uncaughtException", error => {
  console.log(error);
});   

// Run the microservice app
const server=app.listen(config.PORT, () => {
  console.log(`${config.APP} is running on ${config.PORT} Port`);
});

module.exports=server;
