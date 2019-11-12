const mongoose = require('mongoose');
const helper = require('../helpers')
const moment = require('moment')
var ObjectID = require('mongodb').ObjectID;
var user = require('../models/User')

exports.editUser = async (req, res) => {
    try {
        //validate the user objectId is valid or not
        if (typeof req.body.userId != "undefined" && req.body.userId != "") {
            if (!ObjectID.isValid(req.body.userId))
                return res.status(500).json({
                    message: "userId is not valid"
                });
        } else {
            return res.status(400).json({
                message: "userId is required"
            });
        }

        //check user is exist in database
        let userDetails = await user.findOne({ "_id": new ObjectID(req.body.userId) });
        if (!userDetails)
            return res.status(404).json({
                message: "This user is not found."
            });

        //generate hash password via bcrypt helpers
        if (typeof req.body.password != 'undefined' && req.body.password != "")
            req.body.password = await helper.becrypt.generateHashPasswword({ password: req.body.password })

        let filter = { "_id": new ObjectID(req.body.userId) };

        let doc = await user.findOneAndUpdate(filter, req.body, {
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
var User = require('../models/user.js')

exports.home = async (req, res) => {
  res.status(200).json({
    message: "Welcome to Sample Microservice API"
  });
}


exports.deleteUser = async (req, res) => {
  try {
    let userId = req.params.id;
    let result = await User.findOneAndDelete({
      userId: userId
    })
    return res.status(200).send({ "success": true, "message": "Success", "data": result });
  }
  catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}