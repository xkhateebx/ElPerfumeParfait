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

//Get Perfume By Id
module.exports.getPerfumeById = (request, response) => {
    Perfume.findOne({_id:request.params.id})
        .then(perfume => response.json(perfume))
        .catch(err => response.json(err))
}
//Update Perfume
module.exports.updatePerfume = (request, response) => {
    Perfume.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
            .then(res => console.log(response.json(updatedPerfume)))
            .then(updatedPerfume => response.json(updatedPerfume))
            .catch(err => response.json(err))
    }

//Delete an Perfume
module.exports.deletePerfume = (request, response) => {
    Perfume.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

//Likes
module.exports.updateLike = (request, response) => {
    // Perfume.findById({_id: request.params.id})
    // .then(perfume => perfume.update({likes: perfume.likes + 1}))
    Perfume.findOneAndUpdate({_id: request.params.id}, request.body , {new:true})
        .then(like => response.json(like))
        .catch(err => response.json(err))
}

module.exports.getAllLikesforItem = (request, response) => {
    Perfume.findOne({_id: request.params.id})
        .then(allLikes => response.json(allLikes))
        .catch(err => response.json(err))
}



