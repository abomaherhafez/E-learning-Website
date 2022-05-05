const express = require('express');
const router = express.Router();
const admin = require('../models/admin');
const adminCntrl = require('../controllers/admin.controller');
const { authenticate } = require("../config/jwt");

router.post("/api/registerAdmin", adminCntrl.register);
router.post("/api/loginAdmin", adminCntrl.login);
router.get(
  "/api/users/getloggedinAdmin",
  authenticate,
  adminCntrl.getLoggedInUser
);
router.get("/api/logoutAdmin", adminCntrl.logout);



module.exports = router;