const assisterSeance = require("../models/assisterSeance");
const Etudiant = require("../models/etudiant");
const Seance = require("../models/seance");

exports.getAllEtudiantAssisterAccepter = (req, res) => {
  //give sId return stu accept
  assisterSeance
    .find({ sId: req.params.id, statu: "accepter" })
    .then((seance) => res.status(201).json(seance))
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllEtudiantAssisterEnAttente = (req, res) => {
  // same up but not accept
  assisterSeance
    .find({ sId: req.params.id, statu: "en attente" })
    .then((seance) => res.status(201).json(seance))
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllSeanceAssisterAccepter = (req, res) => {
  //give et id retutn seances accept
  assisterSeance
    .find({ etId: req.params.id, statu: "accepter" })
    .then((seance) => res.status(201).json(seance))
    .catch((error) => res.status(400).json({ error }));
};
exports.getAllSeanceAssisterEnAttente = (req, res) => {
  //same up but seance en attent
  assisterSeance
    .find({ etId: req.params.id, statu: "en attente" })
    .then((seance) => res.status(201).json(seance))
    .catch((error) => res.status(400).json({ error }));
};

exports.demandeAssister = (req, res) => {
  const assisterseance = new assisterSeance(req.body);
  assisterseance.statu = "en attente";
  assisterseance
    .save()
    .then((assisterseance) => res.json(assisterseance))
    .catch((err) => res.json(err));
};
exports.statuAssisterSeance = (req, res) => {
  const test = req.body.ok;
  if (test) {
    assisterSeance
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: { statu: "accepter" } },
        { new: true }
      )
      .then((assisterseance) => {
        res.json(assisterseance);
      })
      .catch((err) => res.json(err));
  } else {
    assisterSeance
      .findOneAndUpdate(
        { _id: req.params.id },
        { $set: { statu: "non accepter" } },
        { new: true }
      )
      .then((assisterseance) => {
        res.json(assisterseance);
      })
      .catch((err) => res.json(err));
  }
};
