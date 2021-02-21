const { response } = require('express');
const { Perfume } = require('../models/perfume.model');
const { Comment } = require('../models/comment.model');
const { Like } = require('../models/like.model');



module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.addInfo = (request, response) => {
    Perfume.create(request.body)
        .then(perfume => response.json(perfume))
        .catch(err => response.status(400).json(err));
}

//All Perfumes
module.exports.getAllPerfumes = (request, response) => {
    Perfume.find({})
        .then(allPerfumes => response.json(allPerfumes))
        .catch(err => response.json(err))
}

///////
module.exports.updateLike = (request, response) => {
    Perfume.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(like => response.json(like))
        .catch(err => response.json(err))

}

module.exports.getAllLikes = (request, response) => {
    Perfume.findOne({_id: request.params.id})
        .then(allLikes => response.json(allLikes))
        .catch(err => response.json(err))

}


