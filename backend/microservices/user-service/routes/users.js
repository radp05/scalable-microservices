const express = require('express');
import {createUser,getUsers,loginUser} from '../controllers/users.js';
const config=require('../config/config');
import { validateUserForm,validateLoginForm } from "../validations/formValidation";
import { authentication } from "../services/authenticationService.js";


module.exports = (()=> {
  let router = express.Router();
  router.post(config.API_PREFIX +'/users',validateUserForm, createUser);
  router.get(config.API_PREFIX +'/users',getUsers);
  router.post(config.API_PREFIX +'/users/login',validateLoginForm,authentication,loginUser);
  return router;
})();
