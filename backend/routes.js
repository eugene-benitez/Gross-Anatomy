const controllers = require('./controllers');
const path = require('path');
module.exports = app => {
    app
        .get('/api/muscles', controllers.getAll)
        .get('/api/muscles/:id', controllers.getOne)
        .post('/api/muscles', controllers.addOne)
        .put('/api/muscles/:id', controllers.updateOne)
        .delete('/api/muscles/:id', controllers.deleteOne)

        .get('/api/increaseLikes/:petID/', controllers.increaseLike)
        .get('/api/decreaseLikes/:petID/', controllers.decreaseLike)
        .all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        })
};
