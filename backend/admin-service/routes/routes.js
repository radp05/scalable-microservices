const express = require("express");
const userController = require("../controllers/user.controller");
const config = require("../config/config");
const resourceController = require("../controllers/resource.controller");
const groupController = require("../controllers/group.controller");

module.exports = (() => {
  let router = express.Router();

  //users

  router.post("/users", userController.createUser);
  router.get("/users", userController.getUsers);
  router.get("/users/:id", userController.getUser);
  router.patch("/users/:id", userController.editUser);
  router.delete("/users/:id", userController.deleteUser);

  //user:: resources

  router.post("/resources", resourceController.addResource);
  router.patch("/resources/:resourceId", resourceController.editResource);
  router.get("/resources", resourceController.fetchResourceAll);
  router.delete("/resources/:resourceId", resourceController.removeResource);
  router.get("/resources/:resourceId", resourceController.fetchResourceById);

  //user:: Groups

  router.post("/groups", groupController.addGroup);
  router.patch("/groups/:groupId", groupController.editGroup);
  router.get("/groups", groupController.fetchGroupAll);
  router.get("/groups/:groupId", groupController.fetchGroupDetails);
  router.delete("/groups/:groupId", groupController.removeGroup);

  return router;
})();
