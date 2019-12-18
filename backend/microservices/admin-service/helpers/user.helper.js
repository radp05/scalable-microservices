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
    },
    { "$unwind": "$groupDetails" },
    {
      "$project": {
        "_id": 0,
        "userName": 1,
        "userId": 1,
        "groupId": 1,
        "resourceIds": "$groupDetails.resourceIds"
      }
    }
  ]);
  // let result = await User.aggregate([
  //   {
  //     $match: filter
  //   },
  //   {
  //     $lookup: {
  //       from: "groups",
  //       localField: "groupId",
  //       foreignField: "groupId",
  //       as: "groupDetails"
  //     }
  //   },
  //   {
  //     "$unwind": "$groupDetails"
  //   },
  //   {
  //     "$unwind": "$groupDetails.resourceIds"
  //   },
  //   {
  //     $lookup: {
  //       from: "resources",
  //       localField: "groupDetails.resourceIds",
  //       foreignField: "resourceId",
  //       as: "resourceDetails"
  //     }
  //   },
  //   {
  //     "$unwind": "$resourceDetails"
  //   },
  //   {
  //     "$group": {
  //       "_id": "$_id",
  //       "status": { $first: "$status" },
  //       "password": { $first: "$password" },
  //       "firstName": { $first: "$firstName" },
  //       "lastName": { $first: "$lastName" },
  //       "email": { $first: "$email" },
  //       "groupId": { $first: "$groupId" },
  //       "userName": { $first: "$userName" },
  //       "userId": { $first: "$userId" },
  //       "resourceDetails": { $push: "$resourceDetails" },
  //       "groupDetails": { $first: "$groupDetails" },
  //       "resourceIds": { $push: "$groupDetails.resourceIds" }
  //     }
  //   },
  //   {
  //     "$project": {
  //       "_id": 1,
  //       "status": 1,
  //       "password": 1,
  //       "firstName": 1,
  //       "lastName": 1,
  //       "email": 1,
  //       "groupId": 1,
  //       "userName": 1,
  //       "userId": 1,
  //       "groupDetails": {
  //         "_id": "$groupDetails._id",
  //         "groupId": "$groupDetails.groupId",
  //         "groupName": "$groupDetails.groupName",
  //         "resourceIds": "$resourceIds",
  //         "resourceDetails": "$resourceDetails"
  //       }
  //     }
  //   }
  // ]);
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
  // let result = await User.aggregate([
  //   {
  //     $match: filter
  //   },
  //   {
  //     $lookup: {
  //       from: "groups",
  //       localField: "groupId",
  //       foreignField: "groupId",
  //       as: "groupDetails"
  //     }
  //   },
  //   {
  //     "$unwind": "$groupDetails"
  //   },
  //   {
  //     "$unwind": "$groupDetails.resourceIds"
  //   },
  //   {
  //     $lookup: {
  //       from: "resources",
  //       localField: "groupDetails.resourceIds",
  //       foreignField: "resourceId",
  //       as: "resourceDetails"
  //     }
  //   },
  //   {
  //     "$unwind": "$resourceDetails"
  //   },
  //   {
  //     "$group": {
  //       "_id": "$_id",
  //       "status": { $first: "$status" },
  //       "password": { $first: "$password" },
  //       "firstName": { $first: "$firstName" },
  //       "lastName": { $first: "$lastName" },
  //       "email": { $first: "$email" },
  //       "groupId": { $first: "$groupId" },
  //       "userName": { $first: "$userName" },
  //       "userId": { $first: "$userId" },
  //       "resourceDetails": { $push: "$resourceDetails" },
  //       "groupDetails": { $first: "$groupDetails" },
  //       "resourceIds": { $push: "$groupDetails.resourceIds" }
  //     }
  //   },
  //   {
  //     "$project": {
  //       "_id": 1,
  //       "status": 1,
  //       "password": 1,
  //       "firstName": 1,
  //       "lastName": 1,
  //       "email": 1,
  //       "groupId": 1,
  //       "userName": 1,
  //       "userId": 1,
  //       "groupDetails": {
  //         "_id": "$groupDetails._id",
  //         "groupId": "$groupDetails.groupId",
  //         "groupName": "$groupDetails.groupName",
  //         "resourceIds": "$resourceIds",
  //         "resourceDetails": "$resourceDetails"
  //       }
  //     }
  //   }
  // ]);
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
    },
    { "$unwind": "$groupDetails" },
    {
      "$project": {
        "_id": 0,
        "userName": 1,
        "userId": 1,
        "groupId": 1,
        "resourceIds": "$groupDetails.resourceIds"
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





