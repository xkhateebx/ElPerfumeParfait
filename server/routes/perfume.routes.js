const PerfumeController = require('../controllers/perfume.controller');
// const LikeController = require('../controllers/like.controller');

module.exports = function(app){
    app.get('/api', PerfumeController.index);
    app.post('/api/addInfo', PerfumeController.addInfo);
    app.get('/api/allPerfumes', PerfumeController.getAllPerfumes);
    // app.post('/api/author', AuthorController.createAuthor);
    // app.get('/api/author/:id', AuthorController.getAuthorById);
    // app.put('/api/author/:id', AuthorController.updateAuthor);
    // app.delete('/api/author/:id', AuthorController.deleteAuthor);
    app.put('/api/updateLike/:id',PerfumeController.updateLike);
    app.get('/api/getAllLikes/:id',PerfumeController.getAllLikes);
}