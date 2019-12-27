const processDefinitionHelper = require('../helpers/process-definition.helper');

exports.index = async (req, res) => {
  res.status(200).json({
    message: "Welcome to Camunda Microservice API"
  });
}

exports.getAll = async (req, res) => {
  try {
    const result = await processDefinitionHelper.getProcessDefinitions();
    res.status(200).json({ status: 'success', data: JSON.parse(result) });
  } catch (error) {
    const parsedError = JSON.parse(error.error);
    res.status(500).json({ status: 'failure', message: parsedError.message });
  }
}

exports.getOne = async (req, res) => {
  try {
    const result = await processDefinitionHelper.getOneProcessDefinition(req.params.id);
    res.status(200).json({ status: 'success', data: JSON.parse(result) });
  } catch (error) {
    const parsedError = JSON.parse(error.error);
    res.status(500).json({ status: 'failure', message: parsedError.message });
  }
}

exports.remove = async (req, res) => {
  try {
    const result = await processDefinitionHelper.removeProcessDefinition(req.params.id);
    res.status(200).json({ status: 'success', data: JSON.parse(result) });
  } catch (error) {
    const parsedError = JSON.parse(error.error);
    res.status(500).json({ status: 'failure', message: parsedError.message });
  }
}
