
const mongoose = require('mongoose');

const seanceShema = new mongoose.Schema({

    title:{
      type: String, required: true
    },
    date:{
      type:String, required: true
    },
    heureDebut:{
      type:String, required: true
    },
    heureFin:{
      type: String, required: true
    },
    description:{
        type: String
    },
    enseignantId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"enseignant"
    },
   lienZoom:{},
    statu :{
      type: String, required: true

    }
        

},
);
module.exports = mongoose.model('Seance', seanceShema);