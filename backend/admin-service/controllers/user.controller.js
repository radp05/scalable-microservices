"use strict";
const mongoose = require("mongoose");
const helpers = require("../helpers/user.helper");
const bcryptHelpers = require('../helpers/bcrypt.helper')
const CONSTANTS = require("../constant");
const MESSAGES = require("../messages");

exports.createUser = async (req, res) => {

  try {
    const form = req.body;
    form.groupId = form.groupId;
    let hash = bcryptHelpers.generatePassword(form.password)
    form.password = hash
    let result = await helpers.createUsr(form);
    return res.status(200).json({
      status: "success",
      message: MESSAGES.USER_ADD_SUCCESS,
      data: result
    });

  } catch (error) {
    return res.status(500).json({
      message: MESSAGES.INTERNAL_SERVER_ERR,
      error: error
    });
  }
};

exports.editUser = async (req, res) => {

  try {
    const form = req.body;
    if (form.groupId)
      form.groupId = mongoose.Types.ObjectId(form.groupId);

    const userId = req.params.id;

    let doc = await helpers.validateUserUpdate(form, userId);
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
};

exports.deleteUser = async (req, res) => {

  try {
    let userId = req.params.id;
    let result = await helpers.deleteUserById(userId);
    return res
      .status(200)
      .send({ success: true, message: "Success", data: result });

  } catch (error) {
    res.status(500).send({
      error: error,
      message: MESSAGES.INTERNAL_SERVER_ERR,
    });
  }
};

exports.getUsers = async (req, res) => {

  let filter = {};
  filter.status = CONSTANTS.ACTIVE_STATUS;
  let options = {};
  options.password = CONSTANTS.NON_RETRIVAL;

  try {
    let users = await helpers.getAllUsers(filter, options);
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

exports.getUser = async (req, res) => {
  let userId = req.params.id;

  if (!userId) {
    return res.status(400).json({
      status: "error",
      message: MESSAGES.USER_ID_ERR
    });
  }
  let options = {};
  options.password = CONSTANTS.NON_RETRIVAL;

  try {
    let user = await helpers.getUserById(userId, options);
    return res.status(200).json({
      status: "success",
      data: user || {}
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: MESSAGES.USER_ID_MISSING
    });
  }
};


