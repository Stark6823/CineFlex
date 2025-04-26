const express = require('express');
const movieController = require('../Controller/movieController');
const router = express.Router();

router.route('/')
    .get(movieController.getAllMovies)
    .post(movieController.createMovie); // POST route for creating a movie

router.route('/:id')
    .get(movieController.getMovie)
    .patch(movieController.updateMovie)
    .delete(movieController.deleteMovie);

module.exports = router;