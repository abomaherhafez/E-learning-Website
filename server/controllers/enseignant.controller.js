const Enseignant = require('../models/enseignant');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");



class EnseignantController {

  register(req, res) {
    const enseignant = new Enseignant(req.body);
    enseignant
      .save()
      .then(() => {
        res
          .cookie("usertoken", jwt.sign({ _id: enseignant._id }, secret), {
            httpOnly: true,
          })
          .json({ msg: "success", enseignant: enseignant });
      })
      .catch((err) => res.json(err));
  }
  getLoggedInUser(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    Enseignant.findById(decodedJWT.payload._id)
      .then((enseignant) => res.json(enseignant))
      .catch((err) => res.json(err));
  }

  logout(req, res) {
    res.clearCookie("usertoken");
    res.sendStatus(200);
  }
  getEnseignant(req, res ){
    Enseignant.findOne({_id:req.params.id})
    .then(enseignant => res.status(201).json(enseignant))
    .catch(error => res.status(400).json({error}));
  }
  getAllenseignant  (req, res, next) {
    Enseignant.find()
    .then(enseignants => res.status(200).json(enseignants ))
    .catch(error => res.status(400).json({ error }));
}

 
 deleteEnseignant = (req, res, next) => {
    Enseignant.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
}
modifierEnseignant = (request, response) => {
  Enseignant.findOneAndUpdate({ _id: request.params.id}, request.body, {
    new: true,
  })
    .then((modifierEnseignant) => response.json(modifierEnseignant))
    .catch((err) => response.json(err));
};

}

module.exports = new EnseignantController();
