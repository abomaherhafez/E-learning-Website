const assisterSeance = require('../models/assisterSeance');
const Etudiant = require('../models/etudiant');
const Seance = require('../models/seance');
exports.getAllSeanceAssister = (req, res) => {
    Seance.find().then((seances) => {
    if ((Seance._id == assisterSeance.idS) && (Etudiant._id == assisterSeance.idE)){
         res.status(201).json(seances)
         .catch(error => res.status(400).json({error}))
    }
    else {
        res.json({msg:'erreur'});
    }    
    
});}
// exports.getSeanceAssister =(req, res) =>{
//     Seance.findOne({_id : req.params.id})
//     .then((seance) => {
//        if((Seance._id == assisterSeance.idS) && (Etudiant._id == assisterSeance.idE))
    
// }