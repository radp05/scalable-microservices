
"use strict";
const mongoose = require('mongoose');
const helper = require('../helpers')
const moment = require('moment')
var ObjectID = require('mongodb').ObjectID;
var user = require('../models/User')
// import User from "../models/users";
const CONSTANTS = require("../constant");
const MESSAGES = require("../messages");
import { createHashPassword, createToken } from "../helpers/userHelper";
import { createUsr, getAllUsers } from "../services/modelService";

const editUser = async (req, res) => {
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
}

const deleteUser = async (req, res) => {
  try {
    let userId = req.params.id;
    let result = await user.findOneAndDelete({
      _id: new ObjectID(userId)
    })
    return res.status(200).send({ "success": true, "message": "Success", "data": result });
  }
  catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}
const createUser = async (req, res) => {
  try {
    if (!req.isValid) {
      return res.status(400).json({
        status: "error",
        message: MESSAGES.USER_ADD_FORM_ERR
      });
    } else {
      var hash = await createHashPassword(req.form.password);
      req.form.password = hash;
      await createUsr(req.form);
      return res.status(200).json({
        status: "success",
        message: MESSAGES.USER_ADD_SUCCESS
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: MESSAGES.INTERNAL_SERVER_ERR,
      error: error
    });
  }
};

const getUsers = async (req, res) => {
  let filter = {};
  filter.status = CONSTANTS.ACTIVE_STATUS;
  let options = {};
  options.password = CONSTANTS.NON_RETRIVAL;
  /**ToDo
   *
   * Groups data to fetch and populated
   *
   */
  try {
    let users = await getAllUsers(filter, options);
    return res.status(200).json({
      status: "success",
      data: users
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: MESSAGES.INTERNAL_SERVER_ERR,
      error: error
    });
  }
};

const loginUser = async (req, res) => {

  if (!req.isValid) {
    return res.status(400).json({
      status: "error",
      message: MESSAGES.LOGIN_FORM_ERR
    });
  }
  try {
    return res.status(200).json({
      status: "success",
      user_info: req.user_info
    });
  } catch (error) {
    return res.end(error);
  }
};

export { createUser, loginUser, getUsers,deleteUser,editUser };
