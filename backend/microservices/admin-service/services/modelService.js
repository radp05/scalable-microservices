"use strict";
import User from "../models/user.model";
import Group from "../models/group.model";
const mongoose = require('mongoose');

//users
const createUsr = async doc => {
  return await User.create(doc);
};
const getAllUsers = async (filter, options = {}) => {

  let result = await User.aggregate([
    {
        $match: filter
    },
    {
        $lookup:
        {
            from: "groups",
            localField: "groupId",
            foreignField: "_id",
            as: "groupDetails"
        }
    }
]);
return result;
 // return await User.find(filter, options).populate('groupId')};
}
const deleteUser = async userId => {
  return await User.destroy(userId);
};

const getUserById = async (userId, options = {}) => {
 
  let filter = {
    _id: mongoose.Types.ObjectId(userId)
};
  let result = await User.aggregate([
    {
        $match: filter
    },
    {
        $lookup:
        {
            from: "groups",
            localField: "groupId",
            foreignField: "_id",
            as: "groupDetails"
        }
    }
]);
return result;
};

const updateUserById = async (filter, update, options = {}) => {
  return await User.updateOne(filter, update, options);
};

const findUserByCriteria = async (criteria, options = {}) => {
  return await User.findOne(criteria, options);
};

// groups

const createGrp = async doc => {
  return await Group.create(doc);
};
const getAllGroups = async (filter, options = {}) => {
  return await Group.find(filter, options);
};
const getGroupById = async (groupId, options = {}) => {
  try{
    return await Group.findById(groupId, options);
  }catch(err){
     return undefined;
  }
};

export {
  createUsr,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserById,
  findUserByCriteria,
  getAllGroups,
  createGrp,
  getGroupById
};
