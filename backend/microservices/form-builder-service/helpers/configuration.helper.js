const ConfigurationModel = require('../models/configuration.model')

exports.createConfiguration = async (data) => {
    try {
        var config = new ConfigurationModel(data.body)
        let doc = await config.save();
        return doc
    } catch (error) {
        throw new Error(error);
    }
}

exports.fetchConfigurations = async () => {
    try {
        return await ConfigurationModel.find({});
    } catch (error) {
        throw new Error(error);
    }
}

exports.fetchConfigurationById = async (ConfigurationId) => {
    try {
        return await ConfigurationModel.findOne({ "ConfigurationId": ConfigurationId });
    } catch (error) {
        throw new Error(error);
    }
}

exports.updateConfiguration = async (ConfigurationId, ConfigurationData) => {
    try {
        const filter = { ConfigurationId: ConfigurationId };
        const update = {};
        if (typeof ConfigurationData.ConfigurationName != 'undefined' && ConfigurationData.ConfigurationName != '')
            update['ConfigurationName'] = ConfigurationData.ConfigurationName
        if (typeof ConfigurationData.ConfigurationJson != 'undefined' && ConfigurationData.ConfigurationJson != '')
            update['ConfigurationJson'] = ConfigurationData.ConfigurationJson

        return await ConfigurationModel.findOneAndUpdate(filter, update, {
            new: true
        });
    }
    catch (error) {
        throw new Error(error);
    }
}