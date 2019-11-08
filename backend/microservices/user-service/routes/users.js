const express = require('express');
import {createUser} from '../controllers/users.js';
const config=require('../config/config');
import { validateUserForm } from "../validations/formValidation";

module.exports = (()=> {
  let router = express.Router();
  router.post(config.API_PREFIX +'/users',validateUserForm, createUser);
  return router;
})();
