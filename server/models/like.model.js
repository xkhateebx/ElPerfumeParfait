const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new mongoose.Schema({
    like: {
        type: Number
    },
    perfume: {
        type: Schema.Types.ObjectId,
        ref: "Perfume"
    }
}, { timestamps: true });

module.exports.Like = mongoose.model("Like", LikeSchema);