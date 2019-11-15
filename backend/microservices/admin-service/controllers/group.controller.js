const mongoose = require('mongoose');
const logger = require('../helpers/winston.helper')
var Group = require('../models/group.model')
var Resource = require('../models/resource.model')

/**
 * @description This function is used for add new group
 * @params { string } groupName - group name
 */

exports.addGroup = async (req, res) => {
    try {
        let resourceIds = [];
        if ((req.body.resourceIds).length <= 0)
            return res.status(400).json({
                message: "Please provide resource Id in array"
            });

        (req.body.resourceIds).map(function (value) {
            resourceIds.push(mongoose.Types.ObjectId(value))
        });

        let resourceDetails = await Resource.find({ "_id": { "$in": resourceIds } })

        if (resourceDetails.length == 0)
            return res.status(404).json({
                message: "This resource is not exist."
            });

        let group = new Group({
            groupName: req.body.groupName,
            resourceIds: resourceIds
        })
        let result = await group.save();

        return res.status(200).json({
            message: "group is successfully added.",
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
 * @description This function is used for update the group
 * @params { ObjectId } groupId - group mongo id to update
 * @params { String } groupName - new group name
 * @returns updated data
 */
exports.editGroup = async (req, res) => {
    try {

        let resourceIds = [];
        if ((req.body.resourceIds).length <= 0)
            return res.status(400).json({
                message: "Please provide resource Id in array"
            });

        (req.body.resourceIds).map(function (value) {
            resourceIds.push(mongoose.Types.ObjectId(value))
        });

        let resourceDetails = await Resource.find({ "_id": { "$in": resourceIds } })

        if (resourceDetails.length == 0)
            return res.status(404).json({
                message: "This resource is not exist."
            });

        let filter = {
            _id: mongoose.Types.ObjectId(req.params.groupId)
        };
        let update = {
            groupName: req.body.groupName,
            resourceIds: resourceIds
        };

        let result = await Group.findOneAndUpdate(filter, update, {
            new: true
        });
        if (!result)
            return res.status(404).json({
                message: "This group is not avilable."
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

exports.fetchGroupAll = async (req, res) => {
    try {
        let result = await Group.aggregate([
            {
                $lookup:
                {
                    from: "resources",
                    localField: "resourceIds",
                    foreignField: "_id",
                    as: "resourceDetails"
                }
            },
            {
                $project: {
                    _id: 1,
                    groupName: 1,
                    resourceDetails: 1,
                    createdAt: 1,
                    updatedAt: 1
                }
            }
        ]);

        if (result.length == 0)
            return res.status(404).json({
                message: "No group found.",
            });

        return res.status(200).json({
            message: "group details",
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
 * @description - This function is used for fetch group details
 * @params - {objectId} groupId - group mongoId
 * @returns - {object} result
 */
exports.fetchGroupDetails = async (req, res) => {
    try {
        let result = await Group.aggregate([
            {
                $match: {
                    "_id": mongoose.Types.ObjectId(req.params.groupId)
                }
            },
            {
                $lookup:
                {
                    from: "resources",
                    localField: "resourceIds",
                    foreignField: "_id",
                    as: "resourceDetails"
                }
            },
            {
                $project: {
                    _id: 1,
                    groupName: 1,
                    resourceDetails : 1,
                    createdAt: 1,
                    updatedAt: 1
                }
            }
        ]);

        if (result.length == 0)
            return res.status(404).json({
                message: "No group found.",
            });

        return res.status(200).json({
            message: "group details",
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
exports.removeGroup = async (req, res) => {
    try {
        let result = await Group.findByIdAndRemove({
            "_id": mongoose.Types.ObjectId(req.params.groupId)
        })
        if (!result)
            return res.status(404).json({
                message: "No group found.",
            });

        return res.status(200).json({
            message: "group is successfully deleted."
        });
    } catch (error) {
        logger.log({ level: 'error', message: error.message });
        return res.status(500).json({
            message: "Internal Server Error",
            error: "error.message"
        });
    }
}





