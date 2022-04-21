const Admin = require('../models/admin');
const Etudiant = require('../models/etudiant');
const Enseignant = require('../models/enseignant');
const jwt = require('jsonwebtoken');
const { secret } = require("../config/jwt");

exports.register = (req, res) => {
    const admin = new Admin(req.body);
    admin
      .save()
      .then(() => {
        res
          .cookie("usertoken", jwt.sign({ _id: admin._id }, secret), {
            httpOnly: true,
          })
          .json({ msg: "success", admin: admin });
      })
      .catch((err) => res.json(err));
  };

  exports.login = (req, res) => {
    Admin.findOne({ email: req.body.email })
      .then((admin) => {
        if (admin == null) {
          res.json({ msg: "Invalid login attempt" }); //email is not found
        } else {
          bcrypt
            .compare(req.body.password, admin.password)
            .then((passwordIsValid) => {
              if (passwordIsValid) {
                res
                  .cookie("usertoken", jwt.sign({ _id: admin._id }, secret), {
                    httpOnly: true,
                  })
                  .json({ msg: "success!" });
              } else {
                res.json({ msg: "Invalid login attempt" }); //incorrect password
              }
            })
            .catch((err) => res.json({ msg: "Invalid login attempt", err }));
        }
      })
      .catch((err) => res.json(err));
  };

  exports.getLoggedInUser = (req, res) => {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    Admin.findById(decodedJWT.payload._id)
      .then((admin) => res.json(admin))
      .catch((err) => res.json(err));
  }

  exports.logout = (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
  };

exports.getAllEtudiant =  (req, res, next) =>{
    Etudiant.find()
    .then(etudiants => res.status(200).json(etudiants ))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneEtudiant = (req, res, next) =>{
    Etudiant.findOne({_id: req.params.id})
    .then(etudiant => res.status(200).json(etudiant))
    .catch(error => res.status(404).json({ error }));
};

exports.deleteEtudiant = (req, res, next) => {
          Etudiant.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
};


exports.getAllenseignant =  (req, res, next) =>{
    Enseignant.find()
    .then(enseignants => res.status(200).json(enseignants ))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneEnseignat = (req, res, next) =>{
    Enseignant.findOne({_id: req.params.id})
    .then(enseignant => res.status(200).json(enseignant))
    .catch(error => res.status(404).json({ error }));
};

exports.deleteEnseignant = (req, res, next) => {
    Enseignant.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
};