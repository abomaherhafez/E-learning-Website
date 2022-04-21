const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt");


  router.post("/api/register", UserController.register);
  router.post("/api/login", UserController.login);
  router.get(
    "/api/users/getloggedinuser",
    authenticate,
    UserController.getLoggedInUser
  );
  router.get("/api/logout", UserController.logout);

  module.exports = router;
