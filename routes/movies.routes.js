const express = require('express');

// Controllers
const {
  getAllMovies,
  getMoviesById,
  createMovies,
  updateMovies,
  deleteMovies
} = require('../controllers/movies.controller');

const router = express.Router();

router
  .route('/')
  .get(getAllMovies)
  .post(createMovies);

router
  .route('/:id')
  .get(getMoviesById)
  .patch(updateMovies)
  .delete(deleteMovies);

module.exports = { moviesRouter: router };

