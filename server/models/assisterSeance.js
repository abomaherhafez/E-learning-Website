const mongoose = require("mongoose");
const assisterSeanceSchema = new mongoose.Schema(
    {
        sId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"seance"
        },
        etId: {type: mongoose.Schema.Types.ObjectId , ref:"etudiant"},
        statu: {type: String}
        
    }
);
module.exports = mongoose.model('assisterSeance', assisterSeanceSchema);