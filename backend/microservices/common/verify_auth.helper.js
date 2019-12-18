const jwt = require("jsonwebtoken");
const settings = require('./config.json');

module.exports = (req, res,next) => {
    console.log("authorizations token:::::::::::::" + req.headers.authorization);
    let bearerToken = req.headers.authorization.split(' ');
    console.log(bearerToken[1]);
    console.log(settings.JWT_SECRET);
    // verify a token symmetric
    jwt.verify(bearerToken[1], settings.JWT_SECRET, function (err, decoded) {
        console.log("::::::::::::::::::::::");
       // bar
        if (err) {
            res.send("You are not authorized");
        } else {
            if ( decoded.resourceIds.includes('resource_orders') ) {
                next()
            } else {
                res.send("You are not authorized");
            }
        }
       
    });
  }