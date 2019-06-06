const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gross_anatomy', { useNewUrlParser: true });

var PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: [true, "Name must be greater than 3 characters."]
    },
    type: {
        type: String,
        minlength: 3,
        required: [true, "Type must be greater than 3 characters."]

    },
    description: {
        type: String,
        minlength: 3,
        required: [true, "Description must be greater than 3 characters."]
    },

    skillOne: {
        type: String,
    },

    skillTwo: {
        type: String,
    },

    skillThree: {
        type: String,
    },

    votes: {
        type: Number,
        default: 0,
    }

}
    , { timestamps: true });



module.exports = mongoose.model('Pet', PetSchema);