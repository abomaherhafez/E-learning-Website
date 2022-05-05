const seance = require("../models/seance");
const Seance = require("../models/seance");








exports.creatSeance = (req, res) =>{
    const seance = new Seance(req.body);
    seance.statu = "en attente";
    seance.save()
    .then((seance) => res.json(seance))
    .catch((err) => res.json(err));
};
exports.getAllSeanceAccepter =  (req, res) => {
    Seance.find()
    .then(seances => {
      if(statu == "accepter"){ 
        res.status(200).json({seances})}})
    .catch(error => res.status(400).json({error}))
};
exports.getAllSeanceNon = (req, res) => {
  Seance.find()
  .then(seances => {
    if(statu == "non accepter"){ 
      res.status(200).json({seances})}})
  .catch(error => res.status(400).json({error}))
};    
exports.getSeance = (req, res, next) => {
    Seance.findOne({_id: req.params.id})
    .then(seance => res.status(201).json(seance))
    .catch(error => res.status(400).json({error}));
};
exports.modifierSeance = (request, response) => {
    Seance.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
    })
      .then((modifierSeance) => response.json(modifierSeance))
      .catch((err) => response.json(err));
  };
exports.deleteSeance = (req, res) => {
    Seance.deleteOne({ _id: req.params.id })
      .then((deleteConfirmation) => res.json(deleteConfirmation))
      .catch((err) => res.json(err));
  };

exports.statuSeance = (req, res) => {
  const test = req.body ;
  Seance.findByIdAndUpdate({_id: req.params.id}).then(
    (seance => {if (test){
      seance.statu = "accepter";
      res.json(seance);
    }
    else {
      seance.statu = " non accepter";
      res.json(seance);
    }} )
  ).catch((err => res.json(err)));
  
};
exports.getSeanceEnseignant = (req, res) =>{
  Seance.findById({_id:request.params.enseignantId})
  .then(seance => res.status(201).json(seance))
  .catch((err) => res.json(err));
}