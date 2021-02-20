const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true],
        minLength: [2, "Add Name, at least 2 characters"]
    },
    comment: {
        type: String,
        required: [true, "Add Comment"],
        minLength: [2, "Add Comment"]
    },
    perfume: {
        type: Schema.Types.ObjectId,
        ref: "Perfume"
    }
}, { timestamps: true });

module.exports.Comment = mongoose.model("Comment", CommentSchema);