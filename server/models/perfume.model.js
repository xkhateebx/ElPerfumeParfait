const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerfumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Perfume must have a name"],
        minLength: [2, "Name must be at least 2 characters"]
    },
    company: {
        type: String,
        required: [true, "Manufacturer name must be available"],
    },
    description: {
        type: String,
        minLength: [2, "Add Description"]
    },
    content: {
        type: String 
    },
    image: {
        type: String
    },
    wheretobuy: {
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    like: [{
        type: Schema.Types.ObjectId,
        ref: "Like"
    }]
}, { timestamps: true });

module.exports.Perfume = mongoose.model("Perfume", PerfumeSchema);
