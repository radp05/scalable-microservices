const deploymentHelper = require('../helpers/deployment.helper');

exports.deploy = async (req, res) => {
  try {
    await deploymentHelper.fileUpload(req);
    const result = await deploymentHelper.deploy(req);
    deploymentHelper.removeUploadedFile(req);
    res.status(200).json({ status: 'success', data: JSON.parse(result) });
  } catch (error) {
    res.status(500).json({ status: 'failure', message: error });
  }
}
