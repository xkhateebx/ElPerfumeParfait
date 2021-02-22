const PerfumeController = require('../controllers/perfume.controller');
// const LikeController = require('../controllers/like.controller');

module.exports = function(app){
    app.get('/api', PerfumeController.index);
    //Create Method for Perfume
    app.post('/api/addInfo', PerfumeController.addInfo);
    app.get('/api/allPerfumes', PerfumeController.getAllPerfumes);
    app.get('/api/perfume/:id', PerfumeController.getPerfumeById);
    app.delete('/api/perfume/:id', PerfumeController.deletePerfume);
    app.put('/api/perfume/:id', PerfumeController.updatePerfume);

    // app.post('/api/author', AuthorController.createAuthor);
    app.put('/api/updateLike/:id',PerfumeController.updateLike);
    app.get('/api/getAllLikes/:id',PerfumeController.getAllLikes);
}