const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerfumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Perfume must have a name'],
        minLength: [2, "Name must be at least 2 characters"]
    },
    company: {
        type: String,
        required: [true, "Manufacturer name must be available"]
    },
    description: {
        type: String,
        minLength: [2, "Add Description"]
    },
    content: {
        type: String,
        minLength: [2, "Add Contents"]
    },
    image: {
        type: String,
        minLength: [2, "Add Image Name"]
    },
    wheretobuy: {
        type: String,
        minLength: [2, "Add Links"]
    },
    wheretobuy2: {
        type: String,
        minLength: [2, "Add Links"]
    },
    comments: [{
        type: Schema.Types.ObjectId,
        minLength: [2, "Comment Must have at least 2 Characters"],
        ref: "Comment"
    }],
    
    likes: {
        type :Number,
        max: 1
    }
}, { timestamps: true });



module.exports.Perfume = mongoose.model("Perfume", PerfumeSchema)