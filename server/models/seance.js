const mongoose = require("mongoose");

const seanceShema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
module.exports = mongoose.model("Seance", seanceShema);
