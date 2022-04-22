const mongoose = require("mongoose");
const express = require("express");

mongoose
  .connect(
    "mongodb+srv://panzouz:1234@cluster0.k5zjw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
module.exports = conf;
