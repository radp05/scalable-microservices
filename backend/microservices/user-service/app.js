// Add module dependencies
const express = require("express");
const app = express();
const z = require("babel-register")({
  presets: ["es2015", "stage-2"]
});
require("babel-core/register");
require("babel-polyfill");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
// Add custom dependencies
const config = require("./config/config");
const userRoutes = require("./routes/user");
const groupRoutes=require("./routes/group")

// Init dbConnection
mongoose.connect("mongodb://localhost/user_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

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

// Hanlde uncaughtExceptions here to prevent termination
process.on("uncaughtException", error => {
  console.log(error);
});   

// Run the microservice app
app.listen(config.PORT, () => {
  console.log(`${config.APP} is running on ${config.PORT} Port`);
});
