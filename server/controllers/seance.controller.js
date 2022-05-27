const Seance = require("../models/seance");

exports.creatSeance = (req, res) => {
  const seance = new Seance(req.body);
  seance.statu = "en attente";
  seance
    .save()
    .then((seance) => res.json(seance))
    .catch((err) => res.json(err));
};
exports.getAllSeanceAccepter = (req, res) => {
  Seance.find({ statu: "accepter" })
    .then((seances) => res.status(200).json({ seances }))
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllSeanceNon = (req, res) => {
  Seance.find({ statu: "non accepter" })
    .then((seances) => res.status(200).json({ seances }))
    .catch((error) => res.status(400).json({ error }));
};
exports.getSeance = (req, res) => {
  Seance.findOne({ _id: req.params.id })
    .then((seance) => res.status(201).json(seance))
    .catch((error) => res.status(400).json({ error }));
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
  // const test = req.body.test;
  if (req.body.test == false) {
    Seance.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { statu: "non accepter" } }
    )
      .then((seance) => {
        res.json(seance);
      })
      .catch((err) => res.json(err));
  } else {
    Seance.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { statu: "accepter" } }
    )
      .then((seance) => {
        res.json(seance);
      })
      .catch((err) => res.json(err));
  }
};
exports.getSeanceEnseignant = (req, res) => {
  Seance.find({ enseignantId: req.params.id })
    .then((seance) => res.status(201).json(seance))
    .catch((err) => res.json(err));
};
exports.getSeanceAttente = (req, res) => {
  Seance.find({ statu: "en attente" })
    .then((seance) => res.status(201).json(seance))
    .catch((error) => res.status(400).json({ error }));
};
