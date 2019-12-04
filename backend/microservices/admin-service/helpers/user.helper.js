"use strict";

const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

const User = require("../models/user.model");
const Group = require("../models/group.model");
const Resource = require("../models/resource.model");

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
        foreignField: "_id",
        as: "groupDetails"
      }
    }
  ]);
  return result;
};

exports.deleteUserById = async userId => {
  return await User.findOneAndDelete({
    _id: new ObjectID(userId)
  });
};

exports.getUserById = async (userId, options = {}) => {
  let filter = {
    _id: mongoose.Types.ObjectId(userId)
  };
  let result = await User.aggregate([
    {
      $match: filter
    },
    {
      $lookup: {
        from: "groups",
        localField: "groupId",
        foreignField: "_id",
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
  if (typeof userId != "undefined" && userId != "") {
    if (!ObjectID.isValid(userId)) {
      throw new Error("userId is not valid");
    }
  } else {
    throw new Error("userId is required");
  }

  //check user is exist in database
  let userDetails = await getUserById(userId);

  if (!userDetails) {
    throw new Error("user not found");
  }
  let filter = {
    _id: mongoose.Types.ObjectId(userId)
  };
  return await User.update(filter, form);
};


//groups

exports.addUserGroup = async req => {
  let resourceIds = [];
  if (req.body.resourceIds.length <= 0)
    throw "Please provide resource Id in array";

  req.body.resourceIds.map(function(value) {
    resourceIds.push(mongoose.Types.ObjectId(value));
  });

  let resourceDetails = await Resource.find({ _id: { $in: resourceIds } });

  if (resourceDetails.length == 0) {
    throw "This resource is not exist.";
  }
  let group = new Group({
    groupName: req.body.groupName,
    resourceIds: resourceIds
  });
  let result = await group.save();
  return result;
};

exports.editUserGroup = async req => {
  let resourceIds = [];
  if (req.body.resourceIds.length <= 0)
    throw "Please provide resource Id in array";

  req.body.resourceIds.map(function(value) {
    resourceIds.push(mongoose.Types.ObjectId(value));
  });

  let resourceDetails = await Resource.find({ _id: { $in: resourceIds } });

  if (resourceDetails.length == 0) throw "This resource is not exist.";

  let filter = {
    _id: mongoose.Types.ObjectId(req.params.groupId)
  };
  let update = {
    groupName: req.body.groupName,
    resourceIds: resourceIds
  };

  let result = await Group.findOneAndUpdate(filter, update, {
    new: true
  });
  return result;
};

exports.getUserGroups = async () => {
  let result = await Group.aggregate([
    {
      $lookup: {
        from: "resources",
        localField: "resourceIds",
        foreignField: "_id",
        as: "resourceDetails"
      }
    },
    {
      $project: {
        _id: 1,
        groupName: 1,
        resourceDetails: 1,
        createdAt: 1,
        updatedAt: 1
      }
    }
  ]);

  return result;
};

exports.getUserGroup = async req => {
  let result = await Group.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId(req.params.groupId)
      }
    },
    {
      $lookup: {
        from: "resources",
        localField: "resourceIds",
        foreignField: "_id",
        as: "resourceDetails"
      }
    },
    {
      $project: {
        _id: 1,
        groupName: 1,
        resourceDetails: 1,
        createdAt: 1,
        updatedAt: 1
      }
    }
  ]);
  return result;
};

exports.deleteUserGroup = async req => {
  let result = await Group.findByIdAndRemove({
    _id: mongoose.Types.ObjectId(req.params.groupId)
  });
  return result;
};


//resources
exports.editUserResources = async req => {
  let filter = { _id: mongoose.Types.ObjectId(req.params.resourceId) };
  let update = { resourceName: req.body.resourceName };

  let result = await Resource.findOneAndUpdate(filter, update, {
    new: true
  });
  return result;
};

exports.getUserResources = async () => {
  return await Resource.find({});
};

exports.deleteUserResources = async req => {
  return await Resource.findByIdAndRemove({
    _id: mongoose.Types.ObjectId(req.params.resourceId)
  });
};

exports.getUserResource = async req => {
  return await Resource.findOne({
    _id: mongoose.Types.ObjectId(req.params.resourceId)
  });
};
