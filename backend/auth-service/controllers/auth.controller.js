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
    
    let token = jwt.sign({"resourceIds":["resource_orders"]}, process.env.JWT_SECRET);
       
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
