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