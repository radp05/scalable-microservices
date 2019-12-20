const rp = require('request-promise');

exports.getProcessDefinitions = async () => {
    const options = {
        method: 'GET',
        uri: `${process.env.CAMUNDA_BASE_URL}/process-definition`
    }
    const result = await rp(options);
    return result;
}

exports.getOneProcessDefinition = async (id) => {
    const options = {
        method: 'GET',
        uri: `${process.env.CAMUNDA_BASE_URL}/process-definition/${id}`
    }
    const result = await rp(options);
    return result;
}

exports.removeProcessDefinition = async (id) => {
    const options = {
        method: 'DELETE',
        uri: `${process.env.CAMUNDA_BASE_URL}/process-definition/${id}`
    }
    const result = await rp(options);
    return result;
}