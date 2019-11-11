
exports.index = async(req,res) => {
	res.status(200).json({
      message:"Welcome to Sample Microservice API"
    });
}

exports.home = async(req,res) => {
	res.status(200).json({
      message:"Welcome to Sample Microservice API Home"
    });
}
