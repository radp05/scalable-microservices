"use strict";

const mongoose = require("mongoose");
const CONSTANTS = require("../constant");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  userName: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String
  },
  groupId: {
    type: mongoose.Schema.Types.ObjectId
  },
  status: {
    type: Number,
    default: CONSTANTS.ACTIVE_STATUS
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: null
  },
  createdBy: {
    type: String,
    default: null
  },
  updatedBy: {
    type: String,
    default: null
  }
});
const User = mongoose.model("users", userSchema);
module.exports = User;
