const Object = require('./models');

module.exports = {

    getAll: (req, res) => {
        Object.find().sort({ 'type': 1 })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addOne: (req, res) => {
        const newAuthor = req.body;
        Object.create(newAuthor)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        const { id } = req.params;
        Object.findOne({ _id: id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateOne: (req, res) => {
        const { id } = req.params;
        const data = req.body;
        Object.findOneAndUpdate({ _id: id }, data,
            { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteOne: (req, res) => {
        const { id } = req.params;
        Object.findByIdAndRemove({ _id: id })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },


    //! One to many :

    increaseVote: (req, res) => {
        const { petID } = req.params;
        Object.update(
            { _id: petID },
            { $inc: { "votes": 1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },

    decreaseVote: (req, res) => {
        const { petID } = req.params;
        Object.update({ _id: petID },
            { $inc: { "votes": -1 } })
            .then(data => req.json(data))
            .catch(err => res.json(err));
    },


}