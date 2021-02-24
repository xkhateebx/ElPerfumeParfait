const PerfumeController = require('../controllers/perfume.controller');
const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

// const LikeController = require('../controllers/like.controller');

module.exports = function(app){
    app.get('/api', PerfumeController.index);
    //Create Method for Perfume
    app.post('/api/addInfo', PerfumeController.addInfo);
    app.get('/api/allPerfumes', PerfumeController.getAllPerfumes);
    app.get('/api/perfume/:id', PerfumeController.getPerfumeById);
    app.delete('/api/perfume/:id', PerfumeController.deletePerfume);
    app.put('/api/perfume/:id', PerfumeController.updatePerfume);

    // app.get('/api/getAllLikes/:id',PerfumeController.getAllLikesforItem);
    app.put('/api/updateLike/:id',PerfumeController.updateLike);

    // login & register
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/logout", UserController.logout);
    app.get("/api/user/",authenticate, UserController.getSingleUserById);
    //comment
    app.put('/api/perfume/:id', PerfumeController.addComment);
}