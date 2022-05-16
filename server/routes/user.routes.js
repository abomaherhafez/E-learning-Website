const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt");

  router.post("/api/login", UserController.login);
  router.get(
    "/api/users/getloggedinuser",
    authenticate,
    UserController.getLoggedInUser
  );
  router.get(
    "/api/getloggedinenseignat",
    authenticate,
    UserController.getLoggedInEnseignat
  );
  router.get(
    "/api/admin/getloggedinadmin",
    authenticate,
    UserController.getLoggedInAdmin
  );

 

  module.exports = router;
