// const { response } = require('express');
// const { Like } = require('../models/like.model');

// module.exports.addLike = (request, response) => {
//     Like.create(request.body)
//         .then(like => response.json(like))
//         .catch(err => response.json(err))

// }

// module.exports.getAllLikes = (request, response) => {
//     Like.find()
//         .then(allLikes => response.json(allLikes))
//         .catch(err => response.json(err))

// }