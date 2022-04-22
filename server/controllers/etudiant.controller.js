const Etudiant = require("../models/etudiant");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

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
          .status(200)
          .json({ msg: "success", etudiant: etudiant });
      })
      .catch((err) => res.status(450).json(err));
  }

  login(req, res) {
    Etudiant.findOne({ email: req.body.email })
      .then((etudiant) => {
        if (etudiant == null) {
          res.json({ msg: "Invalid login attempt" }); //email is not found
        } else {
          bcrypt
            .compare(req.body.password, etudiant.password)
            .then((passwordIsValid) => {
              if (passwordIsValid) {
                res
                  .cookie(
                    "usertoken",
                    jwt.sign({ _id: etudiant._id }, secret),
                    {
                      httpOnly: true,
                    }
                  )
                  .status(200)
                  .json({ msg: "success!" });
              } else {
                res.status(450).json({ msg: "Invalid login attempt" }); //incorrect password
              }
            })
            .catch((err) => res.json({ msg: "Invalid login attempt", err }));
        }
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
}

module.exports = new EtudiantController();
