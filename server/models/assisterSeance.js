const mongoose = require("mongoose");
const EtudiantSchema = new mongoose.Schema(
    {
        SId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"seance"
        },
        etId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"tudiant"
        },
        statu: {type: String}
    }
);