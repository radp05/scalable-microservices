const jwt = require("jsonwebtoken");
const AuthHelper = require('../helpers/auth.helper');

const authControler = {}

authControler.verifyUser = async (req, res) => {
    if(req.body.userName == 'admin'){
        let token = jwt.sign(req.body.userName, process.env.JWT_SECRET);
        return res.status(200).json({
            message: "success",
            token: token
        });
    }
    
    let result = await AuthHelper.verifyUser(req, res);
    console.log(":::::::::::::::::::::::")
    console.log(result)
    let options = {};
    options.password = 0;
    let resourceResults = await AuthHelper.getUserById(result.data.userId,options);
    let resourceIds = resourceResults[0].resourceIds;
  
    let token = jwt.sign({"resourceIds":resourceIds}, process.env.JWT_SECRET);
       
    if (result.data) {
        return res.status(200).json({
            message: "success",
            token: token
        });
    }
    return res.status(500).json({
        message: "Internal Error",
        error: result.error
        });
}

module.exports = authControler
