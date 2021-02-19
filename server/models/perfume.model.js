const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerfumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true],
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
        type: String, 
    }
    // image: {
    //     type: Buffer,
    //     optional: [true],
    // }
    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Comment"
    // }],
    // like: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Like"
    // }]
})

module.exports = mongoose.model("Perfume", PerfumeSchema);