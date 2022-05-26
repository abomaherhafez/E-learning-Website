const express = require("express");
const router = express.Router();

const etudiantCntrl = require("../controllers/etudiant.controller");
const { authenticate } = require("../config/jwt");

router.post("/api/registerEtudiant", etudiantCntrl.register);
router.get(
  "/api/users/getloggedinEtudiant",
  authenticate,
  etudiantCntrl.getLoggedInUser
);
router.get("/api/logoutEtudiant", etudiantCntrl.logout);
router.get("/etudiant/:id", etudiantCntrl.getEtudiant);
router.delete("/etudiantDEl/:id", etudiantCntrl.deleteEtudiant);
router.get("/etudiant", etudiantCntrl.getAllEtudiant);
router.post("/modifierEtudiant/:id", etudiantCntrl.modifierEtudiant);
module.exports = router;
