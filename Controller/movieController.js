const movie = require('../Models/movieModel');

const getAllMovies = async (req, res) => {
    try {
        const movies = await movie.find();
        res.status(200).json({
            status: 'success',
            results: movies.length,
            data: {
                movies,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const getMovie = async (req, res) => {
    try {
        const movieData = await movie.findById(req.params.id);
        if (!movieData) {
            return res.status(404).json({
                status: 'fail',
                message: 'No movie found with that ID',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                movie: movieData,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const createMovie = async (req, res) => {
    try {
        console.log('Incoming Request Body:', req.body); // Log the incoming request body
        const newMovie = await movie.create(req.body);
        console.log('Created Movie:', newMovie); // Log the created movie
        res.status(201).json({
            status: 'success',
            data: {
                movie: newMovie,
            },
        });
    } catch (err) {
        console.error('Error Creating Movie:', err.message); // Log the error
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedMovie) {
            return res.status(404).json({
                status: 'fail',
                message: 'No movie found with that ID',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                movie: updatedMovie,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return res.status(404).json({
                status: 'fail',
                message: 'No movie found with that ID',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie,
};