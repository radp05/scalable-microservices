"use strict";
import User from "../models/user.model";
import Group from "../models/group.model";

//users
const createUsr = async doc => {
  return await User.create(doc);
};
const getAllUsers = async (filter, options = {}) => {
  return await User.find(filter, options);
};

const deleteUser = async userId => {
  return await User.destroy(userId);
};

const getUserById = async (userId, options = {}) => {
  return await User.findById(userId, options);
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
export {
  createUsr,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserById,
  findUserByCriteria,
  getAllGroups,
  createGrp
};
