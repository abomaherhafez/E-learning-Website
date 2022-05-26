const Etudiant = require("../models/etudiant");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");
const { hash } = require("bcrypt");

class EtudiantController {
  register(req, res) {
    const etudiant = new Etudiant(req.body);
    etudiant
      .save()
      .then(() => {
        res
          .cookie("usertoken", jwt.sign({ _id: etudiant._id }, secret), {
            httpOnly: true,
          })
          .json({ msg: "success", etudiant: etudiant });
      })
      .catch((err) => res.json(err));
  }

  getLoggedInUser(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    Etudiant.findById(decodedJWT.payload._id)
      .then((etudiant) => res.json(etudiant))
      .catch((err) => res.json(err));
  }

  logout(req, res) {
    res.clearCookie("usertoken");
    res.sendStatus(200);
  }
  getEtudiant(req, res) {
    Etudiant.findOne({ _id: req.params.id })
      .then((etudiant) => res.status(201).json(etudiant))
      .catch((error) => res.status(400).json({ error }));
  }

  getAllEtudiant(req, res) {
    Etudiant.find()
      .then((etudiants) => res.status(200).json(etudiants))
      .catch((error) => res.status(400).json({ error }));
  }

  deleteEtudiant(req, res, next) {
    Etudiant.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
  }

  modifierEtudiant = (request, response) => {
    Etudiant.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
    })
      .then((modifieretudiant) => response.json(modifieretudiant))
      .catch((err) => response.json(err));
  };
}
module.exports = new EtudiantController();
