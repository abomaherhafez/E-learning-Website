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
  