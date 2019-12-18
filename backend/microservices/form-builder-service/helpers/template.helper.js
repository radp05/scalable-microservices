const TemplateModel = require('../models/template.model')

exports.createTemplate = async (data) => {
    try {
        let template = new TemplateModel({
            templateName: data.templateName,
            templateDescription:data.templateDescription,
            templateJson: data.templateJson
        });
        let doc = await template.save();
        return doc
    } catch (error) {
        throw new Error(error);
    }
}

exports.fetchTemplates = async () => {
    try {
        return await TemplateModel.find({});
    } catch (error) {
        throw new Error(error);
    }
}

exports.fetchTemplateById = async (templateId) => {
    try {
        return await TemplateModel.findOne({ "templateId": templateId });
    } catch (error) {
        throw new Error(error);
    }
}

exports.deleteTemplateById = async (templateId) => {
    try {
        return await TemplateModel.deleteOne({ "templateId": templateId });
    } catch (error) {
        throw new Error(error);
    }
}


exports.updateTemplate = async (templateId, templateData) => {
    try {
        const filter = { templateId: templateId };
        const update = {};
        if (typeof templateData.templateName != 'undefined' && templateData.templateName != '')
            update['templateName'] = templateData.templateName
        if (typeof templateData.templateJson != 'undefined' && templateData.templateJson != '')
            update['templateJson'] = templateData.templateJson

        return await TemplateModel.findOneAndUpdate(filter, update, {
            new: true
        });
    }
    catch (error) {
        throw new Error(error);
    }
}