const User = require("../models/user");
const Etudiant = require("../models/etudiant");
const Enseignant =require("../models/enseignant");
const Admin = require ("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

class UserController {
  register(req, res) {
    const user = new User(req.body);
    user
      .save()
      .then(() => {
        res
          .cookie("usertoken", jwt.sign({ _id: user._id }, secret), {
            httpOnly: true,
          })
          .json({ msg: "success", user: user });
      })
      .catch((err) => res.json(err));
  }

//   login(req, res) {
//     const test = false ;
//     Etudiant.findOne({ email: req.body.email })
//       .then((etudiant) => {
//         if (etudiant == null) {
//           res.json({ msg: "Invalid login attempt e" }); //email is not found
//            test = true;
//             if (test) {
//                Enseignant.findOne({ email: req.body.email })
//                  .then((enseignant) => {
//                       if (enseignant == null) {
//                       res.json({ msg: "Invalid login attempt" }); //email is not found
//                       test = true;
//                              if (test) {
//                                 Admin.findOne({ email: req.body.email })
//                                 .then((admin) => {
//                                   if (admin == null) {
//                                             res.json({ msg: "Invalid login attempt" }); //email is not found
//                                 } else {
//                                    bcrypt
//                                    .compare(req.body.password, admin.password)
//                                        .then((passwordIsValid) => {
//                                    if (passwordIsValid) {
//                                         res
//                                          .cookie("usertoken", jwt.sign({ _id: admin._id }, secret), {
//                                         httpOnly: true,
//                                       })
//                                               .json({ msg: "success admin connecté!" });
//                                     } else {
//                                      res.json({ msg: "Invalid login attempt MA" }); //incorrect password
//                                  }
//                                   })
//                    .catch((err) => res.json({ msg: "Invalid login attempt A", err }));
//                       }
//                       })
//                        .catch((err) => res.json(err));}
   
  
                  
//               } else {
//                 bcrypt
//                   .compare(req.body.password, enseignant.password)
//                   .then((passwordIsValid) => {
//                     if (passwordIsValid) {
//                       res
//                         .cookie("usertoken", jwt.sign({ _id: enseignant._id }, secret), {
//                           httpOnly: true,
//                         })
//                         .json({ msg: "success enseignant connecté!" });
//                     } else {
//                       res.json({ msg: "Invalid login attempt ESM" }); //incorrect password
//                     }
//                   })
//                   .catch((err) => res.json({ msg: "Invalid login attempt ES", err }));
//               }
//             })
//             .catch((err) => res.json(err));}}
        
          
// else {
//   bcrypt
//   .compare(req.body.password, etudiant.password)
//   .then((passwordIsValid) => {
//        if (passwordIsValid) {
//             res
//              .cookie("usertoken", jwt.sign({ _id: etudiant._id }, secret), {
//                httpOnly: true,
//               })
//             .json({ msg: "success etudiant connecté!" });
//        } else {
//          res.json({ msg: "Invalid login attempt ME" }); //incorrect password
//               }
//             })
//         .catch((err) => res.json({ msg: "Invalid login attempt E", err }));
//         }
//       })
//       .catch((err) => res.json(err));
//     }
  
login = (req, res) => {
  Enseignant.findOne({ email: req.body.email })
    .then((enseignant) => {
      if (enseignant == null) {
          Etudiant.findOne({ email: req.body.email })
          .then((etudiant) => {
            if (etudiant == null) {
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
                          .json({ admin });
                      } else {
                        res.json({ msg: "Invalid login attempt A" }); //incorrect password
                      }
                    })
                    .catch((err) => res.json({ msg: "Invalid login attempt", err }));
                }
              })
              .catch((err) => res.json(err));
            } else {
              bcrypt
                .compare(req.body.password, etudiant.password)
                .then((passwordIsValid) => {
                  if (passwordIsValid) {
                    res
                      .cookie("usertoken", jwt.sign({ _id: etudiant._id }, secret), {
                        httpOnly: true,
                      })
                      .json({ etudiant });
                  } else {
                    res.json({ msg: "Invalid login attempt e" }); //incorrect password
                  }
                })
                .catch((err) => res.json({ msg: "Invalid login attempt", err }));
            }
          })
          .catch((err) => res.json(err));
      } else {
        bcrypt
          .compare(req.body.password, enseignant.password)
          .then((passwordIsValid) => {
            if (passwordIsValid) {
              res
                .cookie("usertoken", jwt.sign({ _id: enseignant._id }, secret), {
                  httpOnly: true,
                })
                .json({enseignant});
            } else {
              res.json({ msg: "Invalid login attempt ES" }); //incorrect password
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
  getLoggedInAdmin(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    Admin.findById(decodedJWT.payload._id)
      .then((admin) => res.json(admin))
      .catch((err) => res.json(err));
  }
  getLoggedInEnseignat(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
    Enseignant.findById(decodedJWT.payload._id)
      .then((enseignant) => res.json(enseignant))
      .catch((err) => res.json(err));
  }
}
module.exports = new UserController();