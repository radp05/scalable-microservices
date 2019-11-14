const express = require('express');
import {createUser,getUsers,loginUser,editUser,deleteUser} from '../controllers/user.controller';
const config=require('../config/config');
import { validateUserForm,validateLoginForm } from "../validations/formValidation";
import { authentication } from "../services/authenticationService.js";

module.exports = (()=> {
  let router = express.Router();
  router.post(config.API_PREFIX +'/users',validateUserForm, createUser);
  router.get(config.API_PREFIX +'/users',getUsers);
  router.post(config.API_PREFIX +'/users/login',validateLoginForm,authentication,loginUser);
  router.patch(config.API_PREFIX +'/details', editUser);
  router.delete(config.API_PREFIX +'/:id', deleteUser);
  return router;
})();




