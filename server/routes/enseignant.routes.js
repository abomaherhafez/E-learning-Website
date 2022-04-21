const express = require('express');
const router = express.Router();
const enseignant = require('../models/enseignant');
const enseignantCntrl = require('../controllers/enseignant.controller');
const { authenticate } = require("../config/jwt");


  router.post("/api/registerEnseignant", enseignantCntrl.register);
  router.post("/api/loginEnseignant", enseignantCntrl.login);
  router.get(
    "/api/users/getloggedinEnseignant",
    authenticate,
    enseignantCntrl.getLoggedInUser
  );
  router.get("/api/logoutEnseignant", enseignantCntrl.logout);

  module.exports = router;