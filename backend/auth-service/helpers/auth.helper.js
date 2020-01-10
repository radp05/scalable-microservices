const AuthModel = require('../models/auth.model');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const CryptoJS = require("crypto-js");
const SecretKey = config.SECRET_KEY;

var authHelper = {};
let result;

authHelper.verifyUser = async (req,res) => {
   
    try {
        
        result = await AuthModel.findOne({ userName: req.body.userName });
        console.log("::::::::::::::::;;");
        console.log(req.body.userName);
        console.log(req.body.password)
        console.log(result);
            
    } catch (err) {
        console.log("::::::::::::::::;;1");
        return {
            message: "Internal Error",
            error: error
          };
    } 
    
    //let passwordStatus = await bcrypt.compare(req.body.password, result.password);
    
    // Decrypt
var bytes  = CryptoJS.AES.decrypt(result.password.toString(), SecretKey);
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log("decrypted data::::::::::::::::::::::"+decryptedData);
        console.log( req.body.password);
        if (decryptedData === req.body.password ) {
            return {
                    message: "success",
                    data:result
                }
        } else {
            console.log("::::::::::::::::;;2");
            return {
                error: "Invalid username/password"
            };
        }
   
}
    
authHelper.getUserById = async (userId, options = {}) => {
    let filter = {
      userId: userId
    };

    let result = await AuthModel.aggregate([
      {
        $match: filter
      },
      {
        $lookup: {
          from: "groups",
          localField: "groupId",
          foreignField: "groupId",
          as: "groupDetails"
        }
      },
      { "$unwind": "$groupDetails" },
      {
        "$project": {
          "_id": 0,
          "userName": 1,
          "userId": 1,
          "groupId": 1,
          "resourceIds": "$groupDetails.resourceIds"
        }
      }
    ]);
    return result;
  
  
  };

module.exports = authHelper;
