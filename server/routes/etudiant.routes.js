const express = require('express');
const router = express.Router();

const etudiantCntrl = require('../controllers/etudiant.controller');
const { authenticate } = require("../config/jwt");


  router.post("/api/registerEtudiant", etudiantCntrl.register);
  router.post("/api/loginEtudiant", etudiantCntrl.login);
  router.get(
    "/api/users/getloggedinEtudiant",
    authenticate,
    etudiantCntrl.getLoggedInUser
  );
  router.get("/api/logoutEtudiant", etudiantCntrl.logout);

  module.exports = router;