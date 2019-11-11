"use strict";

import { findUserByCriteria } from "../services/modelService";
import { comparePassword, createToken } from "../helpers/userHelper";
const CONSTANT = require("../constant");
const MESSAGES = require("../messages");
const authentication = async (req, res, next) => {
  try {
    let user = await validateUser(req, res);
    let token = await createToken(user);

    let userInfo={};
    userInfo.id=user.id;
    userInfo.email=user.email;
    userInfo.name=user.firstName+' '+ user.lastName;
    userInfo.token=token;
    user['token']=token;
    req.user_info = userInfo;
    next();
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: MESSAGES.iNTERNAL_SERVER_ERR,
      error: err
    });
  }
};

const validateUser = async (req, res) => {
  let criteria = {};
  criteria.email = req.form.email;
  criteria.status = CONSTANT.ACTIVE_STATUS;
  try {
    let user = await findUserByCriteria(criteria);

    if (!user || !(await comparePassword(req.form.password, user))) {
      return res.status(401).json({
        status: "error",
        message: MESSAGES.AUTHENTICATION_ERR
      });
    }
    return user;
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: MESSAGES.iNTERNAL_SERVER_ERR,
      error: err
    });
  }
};
export { authentication };
