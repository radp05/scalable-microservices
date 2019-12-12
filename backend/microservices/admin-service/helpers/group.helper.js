//groups
"use strict";

const mongoose = require("mongoose");
const Group = require("../models/group.model");
const Resource = require("../models/resource.model");


exports.addUserGroup = async req => {
    let resourceIds = [];
    if (req.body.resourceIds.length <= 0)
      throw "Please provide resource Id in array";
  
    req.body.resourceIds.map(function (value) {
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
  
    req.body.resourceIds.map(function (value) {
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