const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gross_anatomy', { useNewUrlParser: true });

var MuscleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is required."]
    },
    origin: {
        type: String,
        required: [true, "Origin Field is required."]

    },
    insertion: {
        type: String,
        required: [true, "Insertion Field is required."]
    },

    nerveSupply: {
        type: String,
        required: [true, "Nerve Supply Field is required."]
    },

    action: {
        type: String,
        required: [true, "Action Field is required."]
    },

    region: {
        type: String,
        required: [true, "Region Field is required."]
    },

    compartment: {
        type: String,
        required: [true, "Compartment Field is required."]
    }

}
    , { timestamps: true });



module.exports = mongoose.model('Muscle', MuscleSchema);