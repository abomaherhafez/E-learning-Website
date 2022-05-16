const express = require("express");
const router = express.Router();
const assisterSeanceCtrl = require("../controllers/assisterSeance.controller");
router.post("/assisterSeance", assisterSeanceCtrl.demandeAssister);
router.get(
  "/getEtudiantAssisterAccepter/:id",
  assisterSeanceCtrl.getAllEtudiantAssisterAccepter
);
router.get(
  "/getEtudiantAssisterEnAttente/:id",
  assisterSeanceCtrl.getAllEtudiantAssisterEnAttente
);
router.get(
  "/getSeanceAssisterAccepter/:id",
  assisterSeanceCtrl.getAllSeanceAssisterAccepter
);
router.get(
  "/getSeanceAssisterEnAttente/:id",
  assisterSeanceCtrl.getAllSeanceAssisterEnAttente
);
router.put(
  "/acceptationAssisterSeance/:id",
  assisterSeanceCtrl.statuAssisterSeance
);
router.get("/test", assisterSeanceCtrl.test);
module.exports = router;
