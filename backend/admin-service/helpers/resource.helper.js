//resources
"use strict";

const mongoose = require("mongoose");
const Resource = require("../models/resource.model");

exports.insertResource = async (req) => {
  let resource = new Resource({
    resourceName: req.body.resourceName
  })
  return await resource.save();
}
exports.editUserResources = async req => {
  let filter = { resourceId: req.params.resourceId };
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
  return await Resource.findOneAndRemove({
    resourceId: req.params.resourceId
  });
};

exports.getUserResource = async req => {
  return await Resource.findOne({
    resourceId: req.params.resourceId
  });
};
