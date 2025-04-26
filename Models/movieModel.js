const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A movie must have a name']
    },
    description: {
        type: String,
        required: [true, 'A movie must have a description']
    },
    ratings: {
        type: Number,
        default: 1.5,
    },
});
const movie = mongoose.model('Movie', movieSchema);
module.exports = movie;