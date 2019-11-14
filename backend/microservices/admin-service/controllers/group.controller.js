const mongoose = require('mongoose');
var Group = require('../models/group.model')


/**
 * @description This function is used for add new group
 * @params { string } groupName - group name
 */

exports.addGroup = async (req, res) => {
    try {
        let group = new Group({
            groupName: req.body.groupName
        })
        let result = await group.save();

        return res.status(200).json({
            message: "group is successfully added.",
            data: result
        });
    } catch (error) {
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
        let filter = { _id: mongoose.Types.ObjectId(req.body.groupId) };
        let update = { groupName: req.body.groupName };

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
        console.log("-",error)
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

exports.fetchGroupAll = async (req, res) => {
    try {
        let result = await Group.find({})
        if (result.length == 0)
            return res.status(404).json({
                message: "No group found.",
            });

        return res.status(200).json({
            message: "group details",
            data: result
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

exports.removeGroup = async (req, res) => {
    try {
        let result = await Group.findByIdAndRemove({ "_id": mongoose.Types.ObjectId(req.params.groupId) })
        if (!result)
            return res.status(404).json({
                message: "No group found.",
            });

        return res.status(200).json({
            message: "group is successfully deleted."
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: "error.message"
        });
    }
}




