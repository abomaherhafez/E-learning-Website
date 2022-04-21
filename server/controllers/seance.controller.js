const Seance = require("../models/seance");

exports.creatSeance = (req, res) =>{
    const seance = new Seance(req.body);
    seance.save()
    .then((seance) => res.json(seance))
    .catch((err) => res.json(err));
};
exports.getAllSeance =  (req, res) => {
    Seance.find()
    .then(seances => res.status(200).json({seances}))
    .catch(error => res.status(400).json({error}));
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

