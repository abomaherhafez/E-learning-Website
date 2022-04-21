const express = require('express');
const router = express.Router();

const seanceCntrl = require('../controllers/seance.controller');


router.get('/seances', seanceCntrl.getAllSeance);
router.get('/seance/:id', seanceCntrl.getSeance);
router.post('/creerseance', seanceCntrl.creatSeance);
router.put('/miseajour/:id', seanceCntrl.modifierSeance);
router.delete('/effacerseance/:id', seanceCntrl.deleteSeance);


module.exports = router;