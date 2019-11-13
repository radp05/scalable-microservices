const express = require('express');
import {createGroup,getGroups} from '../controllers/groupController.js';
const config=require('../config/config');
import { validateGroupForm } from "../validations/formValidation";


module.exports = (()=> {
  let router= express.Router();
  router.post(config.API_PREFIX +'/groups',validateGroupForm, createGroup);
  router.get(config.API_PREFIX +'/groups',getGroups);
  return router;
})();
