const Muscle = require('./models');

module.exports = {

    getAll: (req, res) => {
        Muscle.find().sort({ 'type': 1 })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addOne: (req, res) => {
        const newMuscle = req.body;
        Muscle.create(newMuscle)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        const { id } = req.params;
        Muscle.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        const { id } = req.params;
        const data = req.body;
        Muscle.findOneAndUpdate({ _id: id }, data,
            { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        const { id } = req.params;
        Muscle.findByIdAndRemove({ _id: id })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },


    //! One to many :

    increaseLike: (req, res) => {
        const { muscleID } = req.params;
        Muscle.update(
            { _id: muscleID },
            { $inc: { "likes": 1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    decreaseLike: (req, res) => {
        const { muscleID } = req.params;
        Muscle.update({ _id: muscleID },
            { $inc: { "likes": -1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },


}