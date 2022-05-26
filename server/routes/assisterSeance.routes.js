const express = require("express");
const router = express.Router();
const assisterSeanceCtrl = require("../controllers/assisterSeance.controller");
router.post("/assisterSeance", assisterSeanceCtrl.demandeAssister);
router.get(
  "/getEtudiantAssisterAccepter/:id",
  assisterSeanceCtrl.getAllEtudiantAssisterAccepter
); //give sId return stu accept

router.get(
  "/getEtudiantAssisterEnAttente/:id",
  assisterSeanceCtrl.getAllEtudiantAssisterEnAttente
); //give sId return stu accept
router.get(
  "/getSeanceAssisterAccepter/:id",
  assisterSeanceCtrl.getAllSeanceAssisterAccepter
); //give et id retutn seances accept

router.get(
  "/getSeanceAssisterEnAttente/:id",
  assisterSeanceCtrl.getAllSeanceAssisterEnAttente
); //give et id retutn seances en attente
router.put(
  "/acceptationAssisterSeance/:id",
  assisterSeanceCtrl.statuAssisterSeance
);
router.get("/getallassisterseance", assisterSeanceCtrl.getallassisterseance);
module.exports = router;
