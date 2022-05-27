const express = require("express");
const router = express.Router();

const seanceCntrl = require("../controllers/seance.controller");

router.get("/seancesAccepter", seanceCntrl.getAllSeanceAccepter);
router.get("/seancesNonAccepter", seanceCntrl.getAllSeanceNon);
router.get("/seance/:id", seanceCntrl.getSeance);
router.post("/creerseance", seanceCntrl.creatSeance);
router.put("/miseajour/:id", seanceCntrl.modifierSeance);
router.delete("/effacerseance/:id", seanceCntrl.deleteSeance);
router.post("/statutSeance/:id", seanceCntrl.statuSeance);
router.get("/seanceEnseignant/:id", seanceCntrl.getSeanceEnseignant);
router.get("/seanceEnAttente", seanceCntrl.getSeanceAttente);
module.exports = router;
