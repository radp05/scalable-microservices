
exports.home = async(req,res) => {
	res.status(200).json({
      message:"Welcome to Sample Microservice API"
    });
}


exports.deleteUser = async(req,res) => {
  console.log('...test',req.params);
  try{
    
  }
  catch(error){
    res.status(500).send({
      message: error.message
    });
  }
}