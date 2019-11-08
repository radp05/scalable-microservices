"use strict";

import User from "../models/users";
import { createHashPassword } from "../helpers/userHelper";
const createUser = async (req, res) => {
  try {
    if (!req.isValid) {
      return res.status(400).json({
        status: "error",
        message: "Form validation error"
      });
    } else {
      var hash = await createHashPassword(req.form.password);
      console.log("here comes the hash password", hash);
      req.form.password = hash;
      var user = new User(req.form);
      await user.save();
      return res.status(200).json({
        status: "success",
        message: "User has been added successfully."
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal Error",
      error: error
    });
  }
};

export { createUser };
