const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({

    category: { type: String },
    poster: { type: String },
    title: { type: String },
    plot: { type: String },
    year: { type: String },
    rating: { type: String }
})

module.exports = new mongoose.model('Movie', moviesSchema, "movies");