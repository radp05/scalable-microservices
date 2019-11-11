"use strict";

// import User from "../models/users";
const CONSTANTS = require("../constant");
const MESSAGES = require("../messages");
import { createHashPassword, createToken } from "../helpers/userHelper";
import { createUsr, getAllUsers } from "../services/modelService";

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

export { createUser, loginUser, getUsers };
