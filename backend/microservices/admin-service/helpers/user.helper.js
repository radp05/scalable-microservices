"use strict";

const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;
const User = require("../models/user.model");


//users
exports.createUsr = async doc => {
  return await User.create(doc);
};

exports.getAllUsers = async (filter, options = {}) => {
  let result = await User.aggregate([
    {
      $match: filter
    },
    {
      $lookup: {
        from: "groups",
        localField: "groupId",
        foreignField: "groupId",
        as: "groupDetails"
      }
    }
  ]);
  return result;
};

exports.deleteUserById = async userId => {
  return await User.findOneAndRemove({
    userId: userId
  });
};

exports.getUserById = async (userId, options = {}) => {
  let filter = {
    userId: userId
  };
  let result = await User.aggregate([
    {
      $match: filter
    },
    {
      $lookup: {
        from: "groups",
        localField: "groupId",
        foreignField: "groupId",
        as: "groupDetails"
      }
    }
  ]);
  return result;
};

exports.updateUserById = async (filter, update, options = {}) => {
  return await User.updateOne(filter, update, options);
};

exports.findUserByCriteria = async (criteria, options = {}) => {
  return await User.findOne(criteria, options);
};

exports.validateUserUpdate = async (form, userId) => {
  //check user is exist in database
  let userDetails = await User.findOne({
    userId: userId
  });

  if (!userDetails) {
    throw new Error("user not found");
  }
  let filter = {
    userId: userId
  };
  return await User.update(filter, form);
};





