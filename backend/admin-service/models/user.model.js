"use strict";

const mongoose = require("mongoose");
const CONSTANTS = require("../constant");
var uuid = require('node-uuid');

const userSchema = new mongoose.Schema({
  groupId: {
    type: String, default: function genUUID() {
      return uuid.v1()
    }
  },
  userId: {
    type: String, default: function genUUID() {
      return uuid.v1()
    }
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true,

  },
  userName: {
    type: String
  },
  password: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
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

userSchema.path('email').validate(function (email) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(email); // Assuming email has a text attribute
}, 'Invalid email.')


const User = mongoose.model("users", userSchema);
module.exports = User;
