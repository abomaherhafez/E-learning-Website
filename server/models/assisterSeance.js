const mongoose = require("mongoose");
const EtudiantSchema = new mongoose.Schema({
  idE: { type: String },
  idS: { type: String },
});
