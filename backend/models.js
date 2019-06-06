const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gross_anatomy', { useNewUrlParser: true });

var MuscleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Field is required."]
    },
    origin: {
        type: String,
        required: [true, "Field is required."]

    },
    insertion: {
        type: String,
        required: [true, "Field is required."]
    },

    nerveSupply: {
        type: String,
        required: [true, "Field is required."]
    },

    action: {
        type: String,
        required: [true, "Field is required."]
    },

    region: {
        type: String,
        required: [true, "Field is required."]
    },

    compartment: {
        type: String,
        required: [true, "Field is required."]
    }

}
    , { timestamps: true });



module.exports = mongoose.model('Muscle', MuscleSchema);