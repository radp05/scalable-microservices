
'use strict'

const mongoose = require('mongoose');
const CONSTANTS=require('../constant');

const userSchema = new mongoose.Schema({
  GroupName: {
    type: String
  },
  groupDescription: {
    type: String
  },
  status: {
    type: Number,
    default:CONSTANTS.ACTIVE_STATUS
  },
  createdAt: {
    type: Date,
    default:Date.now
  },
  updatedAt: {
    type: Date,
    default:Date.now
  },
  createdBy:{
    type: String,
    default:null
  },
  updatedBy:{
    type:String,
    default:null
  }
});
const Group = mongoose.model('groups', userSchema);
module.exports = Group