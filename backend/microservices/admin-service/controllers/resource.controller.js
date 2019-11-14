const mongoose = require('mongoose');
const logger = require('../helpers/winston.helper')
var Resource = require('../models/resource.model')

/**
 * @description This function is used for add new resource
 * @params { string } resourceName - resource name
 */

exports.addResource = async (req, res) => {
    try {
        let resource = new Resource({
            resourceName: req.body.resourceName
        })
        let result = await resource.save();

        return res.status(200).json({
            message: "Resource is successfully added.",
            data: result
        });
    } catch (error) {
        logger.log({ level: 'error', message: error.message });
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}
/**
 * @description This function is used for update the resource
 * @params { ObjectId } resourceId - resource mongo id to update
 * @params { String } resourceName - new resource name
 * @returns updated data
 */
exports.editResource = async (req, res) => {
    try {
        let filter = { _id: mongoose.Types.ObjectId(req.body.resourceId) };
        let update = { resourceName: req.body.resourceName };

        let result = await Resource.findOneAndUpdate(filter, update, {
            new: true
        });
        if (!result)
            return res.status(404).json({
                message: "This resource is not avilable."
            });

        return res.status(200).json({
            message: "Successfully updated.",
            data: result
        });
    } catch (error) {
        logger.log({ level: 'error', message: error.message });
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

exports.fetchResourceAll = async (req, res) => {
    try {
        let result = await Resource.find({})
        if (result.length == 0)
            return res.status(404).json({
                message: "No Resource found.",
            });

        return res.status(200).json({
            message: "Resource details",
            data: result
        });
    } catch (error) {
        logger.log({ level: 'error', message: error.message });
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

exports.removeResource = async (req, res) => {
    try {
        let result = await Resource.findByIdAndRemove({ "_id": mongoose.Types.ObjectId(req.params.resourceId) })
        if (!result)
            return res.status(404).json({
                message: "No Resource found.",
            });

        return res.status(200).json({
            message: "Resource is successfully deleted."
        });
    } catch (error) {
        logger.log({ level: 'error', message: error.message });
        return res.status(500).json({
            message: "Internal Server Error",
            error: "error.message"
        });
    }
}