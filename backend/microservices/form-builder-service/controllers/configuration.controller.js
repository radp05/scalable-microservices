
const configurationHelper = require('../helpers/configuration.helper')

exports.createConfiguration = async (req, res) => {
    try {
        let result = await configurationHelper.createConfiguration(req)
        res.status(200).json({
            message: "Successfully created.",
            data: result
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}

// exports.fetchTemplates = async (req, res) => {
//     try {
//         let result = await templateHelper.fetchTemplates();
//         if (result.length == 0)
//             res.status(404).json({
//                 message: "No Templates found"
//             });
//         res.status(200).json({
//             message: "Successfully found.",
//             data: result
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// }

// exports.fetchTemplatesById = async (req, res) => {
//     try {
//         let result = await templateHelper.fetchTemplateById(req.params.templateId);
//         if (!result)
//             res.status(404).json({
//                 message: "No Templates found"
//             });
//         res.status(200).json({
//             message: "Successfully found.",
//             data: result
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// }
// exports.updateTemplate = async (req, res) => {
//     try {
//         let result = await templateHelper.updateTemplate(req.params.templateId, req.body);

//         res.status(200).json({
//             message: "Successfully updated.",
//             data: result
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// }
