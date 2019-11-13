"use strict";

// import User from "../models/users";
const CONSTANTS = require("../constant");
const MESSAGES = require("../messages");
import { createGrp, getAllGroups } from "../services/modelService";

const createGroup = async (req, res) => {
  try {
    if (!req.isValid) {
      return res.status(400).json({
        status: "error",
        message: MESSAGES.GROUP_ADD_FORM_ERR
      });
    } else {
      await createGrp(req.form);
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

const getGroups = async (req, res) => {
  let filter = {};
  filter.status = CONSTANTS.ACTIVE_STATUS;
  let options = {};

  try {
    let users = await getAllGroups(filter, options);
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

export { createGroup, getGroups };
