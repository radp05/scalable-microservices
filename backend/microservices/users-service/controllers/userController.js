const mongoose = require('mongoose');
const helper = require('../helpers')
const moment = require('moment')
var ObjectID = require('mongodb').ObjectID;
var user = require('../models/userModel')

exports.editUser = async (req, res) => {
    try {
        //validate the user objectId is valid or not
        if (typeof req.body.userId != "undefined" && req.body.userId != "") {
            if (!ObjectID.isValid(req.body.userId))
                return res.status(500).json({
                    message: "userId is not valid"
                });
        } else {
            return res.status(500).json({
                message: "userId is required"
            });
        }

        //check user is exist in database

        let userDetails = await user.findOne({ "_id": new ObjectID(req.body.userId) });
        if (!userDetails)
            return res.status(404).json({
                message: "This user is not found."
            });
        let update = { "updatedBy": "Admin" , "updatedAt" : moment().unix() };

        if (typeof req.body.firstName != "undefined" && req.body.firstName != "")
            update.firstName = req.body.firstName

        if (typeof req.body.middleName != "undefined" && req.body.middleName != "")
            update.middleName = req.body.middleName

        if (typeof req.body.lastName != "undefined" && req.body.lastName != "")
            update.lastName = req.body.lastName

        if (typeof req.body.email != "undefined" && req.body.email != "")
            update.email = req.body.email

        if (typeof req.body.password != "undefined" && req.body.password != "")
            update.password = await helper.becrypt.generateHashPasswword(req.body)

        let filter = { "_id": new ObjectID(req.body.userId) };

        let doc = await user.findOneAndUpdate(filter, update, {
            new: true
        });
        return res.status(200).json({
            message: "successfully updated",
            data: doc
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err
        });
    }
}