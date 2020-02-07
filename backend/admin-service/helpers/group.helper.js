//groups
"use strict";

const mongoose = require("mongoose");
const Group = require("../models/group.model");
const Resource = require("../models/resource.model");


exports.addUserGroup = async req => {
  let resourceIds = [];
  if (req.body.resourceIds.length <= 0)
    throw "Please provide resource Id in array";

  let resourceDetails = await Resource.find({ resourceId: { $in: req.body.resourceIds } });

  if (resourceDetails.length == 0 && req.body.resourceIds[0] != '*') {
    throw "This resource is not exist.";
  }
  let group = new Group({
    groupName: req.body.groupName,
    resourceIds: req.body.resourceIds
  });
  let result = await group.save();
  return result;
};

exports.editUserGroup = async req => {
  let resourceIds = [];
  if (req.body.resourceIds.length <= 0)
    throw "Please provide resource Id in array";


  let resourceDetails = await Resource.find({ resourceId: { $in: req.body.resourceIds } });

  if (resourceDetails.length == 0) throw "This resource is not exist.";

  let filter = {
    groupId: req.params.groupId
  };
  let update = {
    groupName: req.body.groupName,
    resourceIds: req.body.resourceIds
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
        foreignField: "resourceId",
        as: "resourceDetails"
      }
    },
    {
      $project: {
        _id: 1,
        groupName: 1,
        resourceDetails: 1,
        createdAt: 1,
        updatedAt: 1,
        groupId: 1
      }
    }
  ]);

  return result;
};

exports.getUserGroup = async req => {
  let result = await Group.aggregate([
    {
      $match: {
        groupId: req.params.groupId
      }
    },
    {
      $lookup: {
        from: "resources",
        localField: "resourceIds",
        foreignField: "resourceId",
        as: "resourceDetails"
      }
    },
    {
      $project: {
        _id: 1,
        groupName: 1,
        resourceDetails: 1,
        createdAt: 1,
        updatedAt: 1,
        groupId: 1
      }
    }
  ]);
  return result;
};

exports.deleteUserGroup = async req => {
  let result = await Group.findOneAndRemove({
    groupId: req.params.groupId
  });
  return result;
};