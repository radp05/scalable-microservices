var User = require('../models/user.js')


exports.deleteUser = async (req, res) => {
  try {
    let userId = req.params.id;
    let result = await User.findOneAndDelete({
      userId: userId
    })
    return res.status(200).send({ "success": true, "message": "Success", "data": result });
  }
  catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}